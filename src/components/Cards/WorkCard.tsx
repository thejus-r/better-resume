import { TrashSimple, PencilSimple } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal/Modal";
import { useWorkExperienceStore } from "../../store/workStore";
import { useState } from "react";
import { WorkDetailsForm } from "@components/Forms/WorkDetailsForm";
import { TWorkExperience } from "../../types/WorkExperience";
import { PreviewRichText } from "@components/ui/RichTextEditor/Previewer";

type WorkCardPropsType = {
  workExperience: TWorkExperience;
};

const WorkCard = ({ workExperience }: WorkCardPropsType) => {
  const [open, setOpen] = useState(false);
  const { currentCompany, role, companyName, from, id, description } =
    workExperience;
  const deleteWorkExperience = useWorkExperienceStore(
    (state) => state.deleteExperience,
  );

  // For form to close the modal after action
  function afterSave() {
    setOpen(false);
  }

  const handleDelete = () => {
    deleteWorkExperience(id);
  };

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
        <div className="mt-2 text-pretty">
          <PreviewRichText htmlString={description ? description : ""} />
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Trigger>
            <PencilSimple size={20} />
          </Modal.Trigger>
          <Modal.Content title="Edit Details">
            <WorkDetailsForm
              workExperience={workExperience}
              afterSave={afterSave}
            />
          </Modal.Content>
        </Modal.Root>
        <button onClick={handleDelete}>
          <TrashSimple size={20} className="fill-red-500" />
        </button>
      </div>
    </div>
  );
};

export { WorkCard };
