import { ProjectForm } from "@features/project/Form";
import { Button } from "@components/ui/Button";
import { Modal } from "@components/ui/Modal/Modal";
import { PlusCircle, PuzzlePiece } from "@phosphor-icons/react";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { ProjectCard } from "@components/Cards/ProjectCard";

const ProjectSection = () => {
  const [open, setOpen] = useState(false);

  const afterSave = () => {
    setOpen(false);
  };

  const projectList = useAppSelector((state) => state.projects.list);

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <PuzzlePiece className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
          Projects
        </h3>
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Trigger asChild>
            <Button intent={"tertiary"} btnType={"text"}>
              <PlusCircle />
              add
            </Button>
          </Modal.Trigger>
          <Modal.Content title="Add a project">
            <ProjectForm afterSave={afterSave} />
          </Modal.Content>
        </Modal.Root>
      </div>
      {projectList.length !== 0 && (
        <div className="flex flex-col gap-2">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export { ProjectSection };
