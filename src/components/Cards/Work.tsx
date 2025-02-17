import { TrashSimple, PencilSimple } from "@phosphor-icons/react";

type WorkCardProps = {
  isCurrentCompany: boolean;
  role: string;
  companyName: string;
  from: string;
  to?: string;
};

const WorkCard = (props: WorkCardProps) => {
  const { isCurrentCompany, role, companyName, from, to } = props;
  return (
    <div className="flex gap-2 p-2.5">
      <div className="flex w-full flex-col">
        <div className="flex flex-col">
          <p className="text-base">{role}</p>
          {isCurrentCompany ? (
            <p className="text-sm text-gray-400">
              in {companyName} since {from}
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              in {companyName} from {from} to {to}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <PencilSimple size={20} />
        <TrashSimple size={20} className="fill-red-500" />
      </div>
    </div>
  );
};

export { WorkCard };
