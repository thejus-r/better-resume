import { Button } from "@components/ui/Button";
import { Pencil, Person } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal";
import { AddWorkModal } from "@components/Modals/AddWork";
import { WorkCard } from "@components/Cards/Work";

const allWorkExperience = [
  {
    isCurrentCompany: true,
    role: "Product Designer",
    companyName: "Flooid LLP",
    from: "April 2024",
  },
  {
    isCurrentCompany: false,
    role: "Product Designer",
    companyName: "Flooid LLP",
    from: "April 2024",
    to: "October 2024",
  },
];

export const WorkExperienceSection = () => {
  return (
    <Modal.Root>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
          <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
            <Person className="fill-inherit" />
          </div>
          <h3 className="w-full font-mono text-sm uppercase text-gray-800">
            Work Experience
          </h3>
          <Modal.Trigger asChild>
            <Button>
              <Button.Icon>
                <Pencil />
              </Button.Icon>
              add
            </Button>
          </Modal.Trigger>
        </div>
        <div className="flex flex-col gap-2">
          {allWorkExperience.map((data, idx) => (
            <WorkCard
              key={idx}
              isCurrentCompany={data.isCurrentCompany}
              companyName={data.companyName}
              role={data.role}
              from={data.from}
              to={data.to}
            />
          ))}
        </div>
      </div>
      <Modal.Popup>
        <AddWorkModal />
      </Modal.Popup>
    </Modal.Root>
  );
};
