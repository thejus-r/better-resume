import { useWorkExperienceStore } from "../../store/workStore";
import {
  SubmitHandler,
  useForm,
  useWatch,
  type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@components/ui/Modal/Modal";
import { InputField } from "@components/ui/InputField/InputField";
import { Button } from "@components/ui/Button";
import { v6 as uuid } from "uuid";

import {
  workExperienceSchema,
  type TWorkExperienceSchema,
} from "../../schemas/workExperienceSchema";
import { type TWorkExperience } from "../../types/WorkExperience";
import { convertDateToString } from "../../utils/dateUtils";
import { Switch } from "@components/ui/Switch";
import { TextEditor, TextEditorRefType } from "@components/ui/RichTextEditor";
import { useRef, useState } from "react";

type TWorkDetailsFormProps = {
  workExperience?: TWorkExperience;
  afterSave: () => void;
};

/**
 * Work Details Form element accepts two arguments. The validation and state manangement is managed within.
 * @param workExperience Optional parameter, if workExperience is not passed to the component, it adds to the Work Experience List.
 * @param afterSave Required, function that can be called once the create/update process is done, Here its usually used to close the modal.
 */
const WorkDetailsForm = ({
  workExperience,
  afterSave,
}: TWorkDetailsFormProps) => {
  const addExperience = useWorkExperienceStore((state) => state.addExperience);
  const updateExperience = useWorkExperienceStore(
    (state) => state.updateExperience,
  );

  const [richText, setRichText] = useState(
    workExperience?.description ? workExperience.description : "",
  );

  const textEditorRef = useRef<TextEditorRefType>(null);

  let defautValues: TWorkExperienceSchema = {
    companyName: "",
    currentCompany: false,
    from: convertDateToString(new Date()),
    role: "",
    to: convertDateToString(new Date()),
  };

  if (workExperience != undefined) {
    defautValues = workExperienceSchema.parse(workExperience);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: defautValues,
  });

  // Extracting all the types to keep TypeScript happy, since DiscriminatedUnion is used in Zod Schema.
  const fullErrors: FieldErrors<
    Extract<TWorkExperienceSchema, { currentCompany: false }>
  > = errors;

  // For live updating the state of 'to' field
  const isCurrentCompany = useWatch({ control, name: "currentCompany" });
  const toMonth = useWatch({ control, name: "to" });
  const fromMonth = useWatch({ control, name: "from" });

  const onSubmit: SubmitHandler<TWorkExperienceSchema> = (data) => {
    if (textEditorRef.current != undefined) {
      setRichText(textEditorRef.current.refreshContent());
    }

    const discription = textEditorRef.current?.refreshContent();

    if (workExperience != undefined) {
      const updatedWorkExperience = {
        id: workExperience.id,
        description: discription,
        ...data,
      };
      updateExperience(updatedWorkExperience);
    } else {
      const newWorkExperience = {
        id: uuid(),
        description: discription,
        ...data,
      };
      addExperience(newWorkExperience);
    }
    afterSave();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField.Root error={fullErrors.role != undefined}>
        <InputField.Label>Role</InputField.Label>
        <InputField.Input {...register("role")} />
        <InputField.Error> {fullErrors.role?.message} </InputField.Error>
      </InputField.Root>
      <InputField.Root error={fullErrors.companyName != undefined}>
        <InputField.Label>Company Name</InputField.Label>
        <InputField.Input {...register("companyName")} />
        <InputField.Error> {fullErrors.companyName?.message} </InputField.Error>
      </InputField.Root>
      <div className="my-4 flex flex-row gap-2">
        <Switch
          type="text"
          {...register("currentCompany", {
            setValueAs(value) {
              if (value == undefined) {
                return false;
              }
              return true;
            },
          })}
        />
        <p className="text-sm">I currently work here</p>
        {fullErrors.currentCompany?.message && (
          <p> {fullErrors.currentCompany?.message} </p>
        )}
      </div>
      <div className="flex w-full flex-row gap-4">
        <InputField.Root error={fullErrors.from != undefined}>
          <InputField.Label>From</InputField.Label>
          <InputField.Input max={toMonth} type="month" {...register("from")} />
          <InputField.Error> {fullErrors.from?.message} </InputField.Error>
        </InputField.Root>
        <InputField.Root
          disable={isCurrentCompany}
          error={fullErrors.to != undefined}
        >
          <InputField.Label>To</InputField.Label>
          <InputField.Input min={fromMonth} type="month" {...register("to")} />
          <InputField.Error>{fullErrors.to?.message}</InputField.Error>
        </InputField.Root>
      </div>
      <InputField.Root>
        <InputField.Label>Description</InputField.Label>
        <TextEditor richText={richText} ref={textEditorRef} />
      </InputField.Root>
      <div className="mt-4 flex w-full items-center justify-end gap-2">
        <Modal.Close asChild>
          <Button intent={"destructive"}>Cancel</Button>
        </Modal.Close>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export { WorkDetailsForm };
