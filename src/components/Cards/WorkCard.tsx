import { TrashSimple, PencilSimple } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal/Modal";
import { useState } from "react";
import { WorkDetailsForm } from "@features/work/Form";
import { TWorkExperience } from "@features/work/types";
import { PreviewRichText } from "@components/ui/RichTextEditor/Previewer";
import { useAppDispatch } from "../../store/hooks";
import { remove } from "@features/work/slice";
import { format } from "date-fns";

type WorkCardPropsType = {
  workExperience: TWorkExperience;
};

const WorkCard = ({ workExperience }: WorkCardPropsType) => {
  const [open, setOpen] = useState(false);
  const { currentCompany, role, companyName, from, id, description } =
    workExperience;

  // For form to close the modal after action
  function afterSave() {
    setOpen(false);
  }

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(remove(id));
  };

  return (
    <div className="flex gap-2 p-2.5">
      <div className="flex w-full flex-col">
        <div className="flex flex-col">
          <p className="text-base">{role}</p>
          {currentCompany ? (
            <p className="text-sm text-gray-400">
              in {companyName} since {format(from, "MMM yyyy")}
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              in {companyName} from {format(from, "MMM yyyy")} to{" "}
              {format(workExperience.to, "MMM yyyy")}
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
