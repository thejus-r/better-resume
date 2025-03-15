import { ProjectForm } from "@features/project/Form";
import { Modal } from "@components/ui/Modal/Modal";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { remove } from "@features/project/slice";
import { useAppDispatch } from "../../store/hooks";
import type { Project } from "@features/project/type";

type TProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: TProjectProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const afterSave = () => {
    setOpen(false);
  };

  return (
    <div className="flex gap-2 rounded-2xl p-2">
      <div className="flex w-full flex-col gap-1">
        <h6 className="text-base font-medium">{project.name}</h6>
        <p className="text-sm text-gray-400">{project.description}</p>
      </div>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger>
          <PencilSimple size={20} />
        </Modal.Trigger>
        <Modal.Content title="Edit Details">
          <ProjectForm afterSave={afterSave} previousValue={project} />
        </Modal.Content>
      </Modal.Root>
      <button onClick={() => dispatch(remove(project.id))}>
        <TrashSimple size={20} className="fill-red-500" />
      </button>
    </div>
  );
};

export { ProjectCard };
