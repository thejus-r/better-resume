import { Button } from "./Button";
import { Input } from "./Input";
import {
  useFieldArray,
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
import { useEffect } from "react";

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
  const hasSkills = useWatch({ control, name: "hasSkills" });

  const { fields, replace, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  useEffect(() => {
    if (hasSkills) {
      replace([{ skill: "" }, { skill: "" }]);
    }
  }, [hasSkills, replace]);

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="flex w-7/12 flex-col p-6">
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
        <div className="flex flex-col gap-1">
          <label>Skills</label>
          <input type="checkbox" {...register("hasSkills")}></input>
          {hasSkills && (
            <>
              {fields.map((field, index) => (
                <div key={field.id}>
                  <Input
                    placeholder="Skill"
                    {...register(`skills.${index}.skill`)}
                  />
                  <button onClick={() => remove(index)}>Remove</button>
                </div>
              ))}
              <Button onClick={() => append({ skill: "" })}>Add More</Button>
            </>
          )}
        </div>

        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Generate
        </Button>
      </div>
    </form>
  );
}
