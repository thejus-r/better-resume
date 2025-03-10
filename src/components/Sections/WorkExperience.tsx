import { useState } from "react";
import { PlusCircle, SuitcaseSimple } from "@phosphor-icons/react";
import { WorkCard } from "@components/Cards/WorkCard";
import { useWorkExperienceStore } from "../../store/workStore";
import { Button } from "@components/ui/Button";
import { Modal } from "@components/ui/Modal/Modal";
import { WorkDetailsForm } from "@components/Forms/WorkDetailsForm";

export const WorkExperienceSection = () => {
  const [open, setOpen] = useState(false);

  function afterSave() {
    setOpen(false);
  }

  const allWorkExperience = useWorkExperienceStore(
    (state) => state.allExperience,
  );

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <SuitcaseSimple className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
          Work Experience
        </h3>
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Trigger asChild>
            <Button intent={"tertiary"} btnType={"text"}>
              <PlusCircle />
              add
            </Button>
          </Modal.Trigger>
          <Modal.Content title="Add Work Experience">
            <WorkDetailsForm afterSave={afterSave} />
          </Modal.Content>
        </Modal.Root>
      </div>
      {allWorkExperience.length > 0 ? (
        <div className="flex flex-col gap-2">
          {allWorkExperience.map((data, idx) => (
            <WorkCard key={idx} workExperience={data} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
