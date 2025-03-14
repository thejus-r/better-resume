import { PersonalDetailsForm } from "./Form";
import { Button } from "@components/ui/Button/Button";
import { Modal } from "@components/ui/Modal/Modal";
import { User, PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Entity } from "@components/ui/Entity";

export const PersonalSection = () => {
  const [open, setOpen] = useState(false);

  const details = useAppSelector((state) => state.personal.value);

  const afterSave = () => {
    setOpen(false);
  };

  const notEmpty =
    details.email != "" &&
    details.name != "" &&
    details.phoneNumber != "" &&
    details.place != "" &&
    details.role != "";

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <User className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
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
      {notEmpty && (
        <div className="grid gap-2.5 py-2 lg:grid-cols-2">
          <Entity label="Name" text={details.name} />
          <Entity label="Role" text={details.role} />
          <Entity label="Email" text={details.email} />
          <Entity label="Phone" text={details.phoneNumber} />
          <Entity label="Place" text={details.place} />
        </div>
      )}
    </div>
  );
};
