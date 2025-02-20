import { InputField } from "@components/ui/InputField/InputField";
import * as Switch from "@radix-ui/react-switch";
import {
  workExperienceSchema,
  WorkExperienceType,
  useWorkExperienceStore,
} from "../../store/workStore";
import { Modal } from "@components/ui/Modal/Modal";
import { Button } from "@components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PencilSimple } from "@phosphor-icons/react";

type WorkFieldProps = {
  defaultValue?: WorkExperienceType;
};

const WorkDetailsForm = ({ defaultValue }: WorkFieldProps) => {
  // const addExperience = useWorkExperienceStore((state) => state.addExperience)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkExperienceType>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: defaultValue
  });

  const onSubmit = (data: WorkExperienceType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <InputField.Root>
        <InputField.Label>Role</InputField.Label>
        <InputField.Input
          defaultValue={defaultValue?.role}
          {...register("role")}
        />
        {errors.role?.message && <p> Error </p>}
      </InputField.Root>
      <InputField.Root>
        <InputField.Label>Company Name</InputField.Label>
        <InputField.Input
          type="email"
          defaultValue={defaultValue?.companyName}
          {...register("companyName")}
        />
        {errors.companyName?.message && <p> Error </p>}
      </InputField.Root>
      <div className="flex flex-row gap-2">
        <input type="checkbox" {...register("currentCompany")} />
        <p className="text-sm">I currently work here</p>
        {errors.currentCompany?.message && <p> Error </p>}
      </div>
      <div className="flex w-full flex-row gap-4">
        <InputField.Root>
          <InputField.Label>From</InputField.Label>
          <InputField.Input
            type="month"
            defaultValue={defaultValue?.from}
            {...register("from")}
          />
          {errors.from?.message && <p> Error </p>}
        </InputField.Root>
        <InputField.Root>
          <InputField.Label>To</InputField.Label>
          <InputField.Input
            type="month"
            defaultValue={defaultValue?.from}
            {...register("to")}
          />
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
