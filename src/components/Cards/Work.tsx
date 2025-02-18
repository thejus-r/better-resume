import { Button } from "@components/ui/Button";
import { InputField } from "@components/ui/InputField";
import { TrashSimple, PencilSimple } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog"
import * as Switch from "@radix-ui/react-switch";

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
        <Dialog.Root>
          <Dialog.Trigger>
            <PencilSimple size={20} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 top-0 left-0 bg-black/25" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl overflow-clip w-5/12">
              <Dialog.Title className="p-4 w-full text-lg bg-gray-50">Edit Work Experience</Dialog.Title>
              <div className="p-4 w-full">
                <WorkFields details={props} />
              </div>
              <div className="px-4 pb-4 flex items-center justify-end gap-2">
                <Dialog.Close asChild>
                  <Button state="destructive" >Cancel</Button>
                </Dialog.Close>
                <Button>Save</Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <TrashSimple size={20} className="fill-red-500" />
      </div>
    </div>
  );
};

const WorkFields = ({ details }: { details: WorkCardProps }) => {
  return <form>
    <InputField label="Role" htmlFor="role" />
    <InputField label="Company Name" htmlFor="companyName" />
    <div className="flex flex-row gap-2">
      <Switch.Root className="peer mb-3 inline-flex w-9 h-5 rounded-full shrink-0 cursor-pointer transition-colors items-center border-2 border-transparent border-gray-300 data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-200">
        <Switch.Thumb
          className="pointer-events-none block h-4 w-4 rounded-full transition-transform data-[state=unchecked]:bg-white data-[state=checked]:bg-white data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
      </Switch.Root>
      <p className="text-sm">I currently work here</p>
    </div>
    <div className="flex flex-row w-full gap-4">
      <InputField label="From" type="month" htmlFor="formDate" />
      <InputField label="To" type="month" htmlFor="toDate" />
    </div>

  </form>
}

export { WorkCard };
