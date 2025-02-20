import { Pencil, Person } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal";
import { InputField } from "@components/ui/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema } from "../../schemas/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmptyContent } from "@components/ui/EmptyContent";
import { Button } from "@components/ui/Button";

const schema = formSchema.pick({
  personalDetails: true,
});

type SchemaType = z.infer<typeof schema>;

export const PersonalSection = () => {
  const { register, handleSubmit, formState } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<SchemaType> = (data) => console.log(data);
  return (
    <Modal.Root>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
          <div className="fill-w/Users/mave/Desktop/Screenshot\\ 2025-02-10\\ at\\ 12.57.16 PM.pnghite flex items-center justify-center rounded-xl bg-gray-800 p-2.5">
            <Person className="fill-inherit" />
          </div>
          <h3 className="w-full font-mono text-sm uppercase text-gray-800">
            Personal
          </h3>
          <Modal.Trigger asChild>
            <Button intent={"tertiary"} btnType={"text"} >
              <span>
                <Pencil />
              </span>
              edit
            </Button>
          </Modal.Trigger>
        </div>
        <div>
          <EmptyContent />
        </div>
      </div>
      <Modal.Popup>
        <Modal.Title>Change your peronal details</Modal.Title>
        <Modal.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              error={formState.errors.personalDetails?.name?.message}
              htmlFor={"name"}
              label="Name"
              register={register("personalDetails.name")}
            />
            <InputField
              error={formState.errors.personalDetails?.email?.message}
              htmlFor={"email"}
              label="Email address"
              register={register("personalDetails.email")}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Content>
      </Modal.Popup>
    </Modal.Root>
  );
};
