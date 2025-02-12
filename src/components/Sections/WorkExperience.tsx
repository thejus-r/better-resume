import { Button, ButtonIcon } from "@components/ui/Button";
import { Pencil, Person } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal";
import { InputField } from "@components/ui/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema } from "../../schemas/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { EmptyContent } from "@components/ui/EmptyContent";

const schema = formSchema.pick({
  personalDetails: true
})

type SchemaType = z.infer<typeof schema>

export const WorkExperienceSection = () => {

  const { register, handleSubmit, formState } = useForm<SchemaType>({
    resolver: zodResolver(schema)
  })
  const onSubmit: SubmitHandler<SchemaType> = (data) => console.log(data)
  return (
    <Modal.Root>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
          <div className="flex items-center justify-center rounded-xl bg-gray-800 fill-w p-2.5">
            <Person className="fill-inherit" />
          </div>
          <h3 className="w-full font-mono text-sm uppercase text-gray-800">
            Work Experience
          </h3>
          <Modal.Trigger asChild>
            <Button>
              <ButtonIcon>
                <Pencil />
              </ButtonIcon>
              add
            </Button>
          </Modal.Trigger>
        </div>
        <div>
          <EmptyContent />
        </div>
      </div>
      <Modal.Popup>
        <Modal.Title>Add your work experience</Modal.Title>
        <Modal.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField label="Company Name" htmlFor="companyName"/>
            <InputField label="Role" htmlFor="role"/>
            <div className="flex flex-row w-full gap-4">
              <InputField label="From" type="date" htmlFor="formDate"/>
              <InputField label="To" htmlFor="toDate"/>
            </div>
            <button type="submit" >Submit</button>
          </form>
        </Modal.Content>
      </Modal.Popup>
    </Modal.Root>
  );
};
