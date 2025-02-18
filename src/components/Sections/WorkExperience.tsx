import { TextButton } from "@components/ui/TextButton";
import { Pencil, Person } from "@phosphor-icons/react";
import { WorkCard } from "@components/Cards/Work";
import * as Dialog from "@radix-ui/react-dialog"

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
  {
    isCurrentCompany: false,
    role: "Product Developer",
    companyName: "Intuit Softwares",
    from: "Oct 2025",
    to: "October 2025",
  },

];

export const WorkExperienceSection = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
        <div className="fill-w flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
          <Person className="fill-inherit" />
        </div>
        <h3 className="w-full font-mono text-sm uppercase text-gray-800">
          Work Experience
        </h3>
        <TextButton>
          <TextButton.Icon>
            <Pencil />
          </TextButton.Icon>
          add
        </TextButton>
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
      <Dialog.Root>
        <Dialog.Trigger>
          Open
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/25" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            This content is from the portal
          </Dialog.Content> </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
