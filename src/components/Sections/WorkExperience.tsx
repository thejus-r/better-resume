import { Pencil, Person } from "@phosphor-icons/react";
import { WorkCard } from "@components/Cards/WorkCard";
import { v6 as uuid } from "uuid"
import { useWorkExperienceStore, WorkExperienceType } from "../../store/workStore";
import { Button } from "@components/ui/Button";

export const WorkExperienceSection = () => {
  const allWorkExperience = useWorkExperienceStore((state) => state.allExperience)
  const addWorkExperience = useWorkExperienceStore((state) => state.addExperience)


  const handleClick = () => {
    const temp: WorkExperienceType = {
      companyName: "Flooid",
      currentCompany: false,
      to: "2024-10",
      from: "2023-04",
      role: "UI/UX Designer",
      id: uuid()
    }
    addWorkExperience(temp)
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <Person className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm uppercase text-gray-800">
          Work Experience
        </h3>

        <Button intent={"tertiary"} btnType={"text"} onClick={handleClick}>
          <span>
            <Pencil />
          </span>
          add
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {allWorkExperience.map((data, idx) => (
          <WorkCard key={idx} workExperience={data} />
        ))}
      </div>
    </div>
  );
};
