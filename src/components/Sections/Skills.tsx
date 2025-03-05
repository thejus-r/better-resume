import { Button } from "@components/ui/Button";
import { Chip } from "@components/ui/Chips";
import { PencilSimple, Brain } from "@phosphor-icons/react";

const skills = ["TypeScript", "JavaScript", "ReactJS", "GoLang", "Redux"]

const SkillSection = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <Brain className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm text-gray-800 uppercase">
          Skills
        </h3>
        <Button btnType={"text"} intent={"tertiary"}>
          <span>
            <PencilSimple />
          </span>
          Add
        </Button>
      </div>
      <div className="flex gap-2 p-2 w-full flex-wrap">
        {skills.map((data, idx) => (
          <Chip onRemove={() => console.log("removed")} key={idx}>{data}</Chip>
        ))}
      </div>
    </div>
  );
};

export { SkillSection };
