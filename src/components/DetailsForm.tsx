import { Button } from "./Button";
import { Input } from "./Input";
import { useForm, useWatch, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formDefaultValues,
  formSchema,
  type FormSchema,
} from "../lib/formSchema";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  const allErrors: FieldErrors<
    Extract<FormSchema, { hasWorkExperience: true }>
  > = errors;

  const hasWorkExperience = useWatch({ control, name: "hasWorkExperience" });
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex w-7/12 flex-col p-6"
    >
      <div className="w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label>Your Name</label>
          <Input
            variant={!!allErrors.name?.message ? "error" : "default"}
            {...register("name")}
            placeholder="Name"
          />
          {errors.name?.message && (
            <p className="text-sm italic text-red-500">
              {allErrors.name?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Designation</label>
          <Input {...register("designation")} placeholder="Your Designation" />
        </div>
        <div className="flex flex-col gap-1">
          <label>Has Work Experience</label>
          <input type="checkbox" {...register("hasWorkExperience")}></input>
          {hasWorkExperience && (
            <Input placeholder="Company" {...register("companyName")} />
          )}
        </div>

        <Button type="submit">Generate</Button>
      </div>
    </form>
  );
}
