import { useState } from "react";
import { PlusCircle, SuitcaseSimple } from "@phosphor-icons/react";
import { WorkCard } from "@components/Cards/WorkCard";
import { Button } from "@components/ui/Button";
import { Modal } from "@components/ui/Modal/Modal";
import { WorkDetailsForm } from "./Form";
import { useAppSelector } from "../../store/hooks";

export const WorkExperienceSection = () => {
  const [open, setOpen] = useState(false);

  function afterSave() {
    setOpen(false);
  }

  const allWorkExperience = useAppSelector(
    (state) => state.workExperience.experience,
  );

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <SuitcaseSimple className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
          Work Experience
          <span className="text-red-500">*</span>
        </h3>
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Trigger asChild>
            <Button intent={"tertiary"} btnType={"text"}>
              <PlusCircle />
              add
            </Button>
          </Modal.Trigger>
          <Modal.Content title="Add Work Experience">
            <WorkDetailsForm afterSave={afterSave} workExperience={undefined} />
          </Modal.Content>
        </Modal.Root>
      </div>
      {allWorkExperience.length > 0 ? (
        <div className="flex flex-col gap-2">
          {allWorkExperience.map((work) => (
            <WorkCard key={work.id} workExperience={work} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
