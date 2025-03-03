import * as RadixDialog from "@radix-ui/react-dialog";

const Modal = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <RadixDialog.Root modal open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
};

const Content = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 top-0 left-0 bg-black/25" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 w-5/12 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white">
        <RadixDialog.Title className="w-full bg-gray-50 p-4 text-lg">
          {title}
        </RadixDialog.Title>
        <div className="p-4">{children}</div>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

const Control = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-end gap-2 px-4 pb-4">
      {children}
    </div>
  );
};

const Root = Modal;
const Trigger = RadixDialog.Trigger;
const Close = RadixDialog.Close;

Modal.Root = Root;
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Control = Control;
Modal.Close = Close;

export { Modal, Root, Trigger, Content, Control, Close };
