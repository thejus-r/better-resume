import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import {
  useForm,
  useWatch,
  type FieldErrors,
  type SubmitHandler,
} from "react-hook-form";
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
  } = useForm<FormSchema>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  const allErrors: FieldErrors<
    Extract<FormSchema, { hasWorkExperience: true }>
  > = errors;

  const hasWorkExperience = useWatch({ control, name: "hasWorkExperience" });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="flex w-7/12 flex-col p-6">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label>Your Name</Label>
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
          <Label>Designation</Label>
          <Input {...register("designation")} placeholder="Your Designation" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 align-middle">
            <input type="checkbox" {...register("hasWorkExperience")}></input>
            <label>Has Work Experience</label>
          </div>
          {hasWorkExperience && (
            <div className="flex flex-col">
              <Label>Company Name</Label>
              <Input placeholder="Company" {...register("companyName")} />
            </div>
          )}
        </div>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Generate
        </Button>
      </div>
    </form>
  );
}
