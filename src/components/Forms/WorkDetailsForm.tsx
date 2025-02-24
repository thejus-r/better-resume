import { useWorkExperienceStore } from "../../store/workStore";
import { SubmitHandler, useForm, useWatch, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@components/ui/Modal/Modal";
import { InputField } from "@components/ui/InputField/InputField";
import { Button } from "@components/ui/Button";
import { v6 as uuid } from "uuid"

import { workExperienceSchema, type TWorkExperienceSchema } from "../../schemas/workExperienceSchema"
import { type TWorkExperience } from "../../types/WorkExperience";

type TWorkDetailsFormProps = {
  workExperience?: TWorkExperience
  afterSave: () => void
}

/**
 * Form element for Work Experience Details
 * @param workExperience Optional parameter, if workExperience is not passed to the component, it adds to the Work Experience List.
 * @param afterSave Required, function that can be called once the create/update process is done, Here its usually used to close the modal.
 */
const WorkDetailsForm = ({ workExperience, afterSave }: TWorkDetailsFormProps) => {
  const addExperience = useWorkExperienceStore((state) => state.addExperience)
  const updateExperience = useWorkExperienceStore((state) => state.updateExperience)

  let defautValues: TWorkExperienceSchema = {
    companyName: "",
    currentCompany: false,
    from: "2025-01",
    role: "",
    to: "2025-01"
  }
  if (workExperience != undefined) {
    defautValues = workExperienceSchema.parse(workExperience)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<TWorkExperienceSchema>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: defautValues
  });

  // Extracting all the types to keep TypeScript happy, since DiscriminatedUnion is used in Zod Schema.
  const fullErrors: FieldErrors<Extract<TWorkExperienceSchema, { currentCompany: false }>> = errors

  // For live updating the state of 'to' field
  const isCurrentCompany = useWatch({ control, name: "currentCompany" })
  const toMonth = useWatch({ control, name: "to" })
  const fromMonth = useWatch({ control, name: "from" })

  const onSubmit: SubmitHandler<TWorkExperienceSchema> = (data) => {
    if (workExperience != undefined) {
      const updatedWorkExperience = { id: workExperience.id, ...data }
      updateExperience(updatedWorkExperience)

    } else {
      const newWorkExperience = { id: uuid(), ...data }
      addExperience(newWorkExperience)
    }
    afterSave()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField.Root error={fullErrors.role != undefined}>
        <InputField.Label>Role</InputField.Label>
        <InputField.Input
          {...register("role")}
        />
        <InputField.Error> {fullErrors.role?.message} </InputField.Error>
      </InputField.Root>
      <InputField.Root error={fullErrors.companyName != undefined}>
        <InputField.Label>Company Name</InputField.Label>
        <InputField.Input
          {...register("companyName")}
        />
        <InputField.Error> {fullErrors.companyName?.message} </InputField.Error>
      </InputField.Root>
      <div className="flex flex-row gap-2">
        <input type="checkbox" {...register("currentCompany")} />
        <p className="text-sm">I currently work here</p>
        {fullErrors.currentCompany?.message && <p> Error </p>}
      </div>
      <div className="flex w-full flex-row gap-4">
        <InputField.Root error={fullErrors.from != undefined}>
          <InputField.Label>From</InputField.Label>
          <InputField.Input
            max={toMonth}

            type="month"
            {...register("from")}
          />
          <InputField.Error> {fullErrors.from?.message} </InputField.Error>
        </InputField.Root>
        <InputField.Root disable={isCurrentCompany} error={fullErrors.to != undefined}>
          <InputField.Label>To</InputField.Label>
          <InputField.Input
            min={fromMonth}
            type="month"
            {...register("to")}
          />
          <InputField.Error>
            {fullErrors.to?.message}
          </InputField.Error>
        </InputField.Root>

      </div>
      <div className="mt-4 flex w-full items-center justify-end gap-2">
        <Modal.Close asChild>
          <Button intent={"destructive"}>
            Cancel
          </Button>
        </Modal.Close>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export { WorkDetailsForm };

/*
        <Switch.Root
          {...register("currentCompany")}
          className="peer mb-3 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-gray-300 border-transparent transition-colors data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-200"
        >
          <Switch.Thumb className="pointer-events-none block h-4 w-4 rounded-full transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white data-[state=unchecked]:bg-white" />
        </Switch.Root>
 * **/
