import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from "react-hook-form";

export default function DetailsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex w-7/12 flex-col p-6"
    >
      <div className="w-full flex-col gap-2.5">
        <div className="flex flex-col gap-1">
          <label>Your Name</label>
          <Input {...register("name", { required: true })} placeholder="Name" />
        </div>
        <div className="flex flex-col gap-1">
          <label>Designation</label>
          <Input
            {...register("designation", { required: true, minLength: 4 })}
            placeholder="Your Designation"
          />
        </div>
        <Button type="submit">Generate</Button>
      </div>
    </form>
  );
}
