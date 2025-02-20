import { Button } from "@components/ui/Button";
import * as InputField from "@components/ui/InputField/InputField"
import { TrashSimple, PencilSimple } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import * as Modal from "@components/ui/Modal/Modal"
import * as Switch from "@radix-ui/react-switch";
import { useWorkExperienceStore, WorkExperienceType } from "../../store/workStore";
import { useState } from "react";
import { WorkDetailsForm } from "@components/Forms/WorkDetailsForm";

type WorkCardPropsType = {
  workExperience: WorkExperienceType
}

const WorkCard = ({ workExperience }: WorkCardPropsType) => {

  const [open, setOpen] = useState(false)
  const { currentCompany, role, companyName, from, id } = workExperience;
  const deleteWorkExperience = useWorkExperienceStore((state) => state.deleteExperience)

  const handleDelete = () => {
    deleteWorkExperience(id)
  }

  return (
    <div className="flex gap-2 p-2.5">
      <div className="flex w-full flex-col">
        <div className="flex flex-col">
          <p className="text-base">{role}</p>
          {currentCompany ? (
            <p className="text-sm text-gray-400">
              in {companyName} since {from}
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              in {companyName} from {from} to {workExperience.to}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Trigger>
            <PencilSimple size={20} />
          </Modal.Trigger>
          <Modal.Content title="Edit Details">
            <WorkDetailsForm defaultValue={workExperience} />
          </Modal.Content>
        </Modal.Root>
        <button onClick={handleDelete}>
          <TrashSimple size={20} className="fill-red-500" />
        </button>
      </div >
    </div >
  );
};

export { WorkCard };
