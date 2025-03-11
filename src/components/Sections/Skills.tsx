// for Logic
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove } from "../../features/skills/skillsSlice";

// for UI
import { Button } from "@components/ui/Button";
import { PencilSimple, Brain } from "@phosphor-icons/react";
import { Chip } from "@components/ui/Chip";

const SkillSection = () => {
  const skillList = useAppSelector((state) => state.skills.list);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <Brain className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
          Skills
        </h3>
        <Button
          btnType={"text"}
          intent={"tertiary"}
          onClick={() => dispatch(add("React"))}
        >
          <span>
            <PencilSimple />
          </span>
          Add
        </Button>
      </div>
      <div className="flex w-full flex-wrap gap-2 p-2">
        {skillList.map(({ id, name }) => (
          <Chip removable onRemove={() => handleRemove(id)} key={id}>
            {name}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export { SkillSection };
