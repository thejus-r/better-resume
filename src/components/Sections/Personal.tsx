import { PersonalDetailsForm } from "@components/Forms/PersonalDetailsForm";
import { Button } from "@components/ui/Button/Button";
import { Modal } from "@components/ui/Modal/Modal";
import { User, PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";

export const PersonalSection = () => {

  const [open, setOpen] = useState(false)

  const afterSave = () => {
    setOpen(false)
  }

  return <div className="flex flex-col gap-2 p-2">
    <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
      <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
        <User className="fill-inherit" />
      </div>
      <h3 className="w-full font-mono text-sm uppercase text-gray-800">
        Personal Details
      </h3>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button intent={"tertiary"} btnType={"text"}>
            <PencilSimple />
            edit
          </Button>
        </Modal.Trigger>
        <Modal.Content title="Edit your personal details.">
          <PersonalDetailsForm afterSave={afterSave} />
        </Modal.Content>
      </Modal.Root>
    </div>
  </div>
};
