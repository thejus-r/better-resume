import * as RadixDialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  open: boolean;
};

// Default Value for Context
const ModalContext = createContext<ModalContextType>({ open: false });

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ open: open }}>
      <RadixDialog.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDialog.Root>
    </ModalContext.Provider>
  );
};

const Popup = ({ children }: { children: React.ReactNode }) => {
  const { open } = useContext(ModalContext);

  if (open != true) {
    return <div></div>;
  }
  return (
    <RadixDialog.Portal forceMount>
      <RadixDialog.Overlay className="fixed inset-0 left-0 top-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <RadixDialog.Content className="w-full overflow-clip rounded-2xl bg-white lg:w-2/3 xl:w-1/3">
          <VisuallyHidden>
            <RadixDialog.Description />
          </VisuallyHidden>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Overlay>
    </RadixDialog.Portal>
  );
};

const Actions = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex place-content-end gap-1 px-4 pb-4">{children}</div>
  );
};

const Title = ({ children }: { children: string }) => {
  return (
    <RadixDialog.Title className="bg-gray-100 p-4 text-base font-normal">
      {children}
    </RadixDialog.Title>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

const Trigger = RadixDialog.Trigger;
const Root = Modal;
Modal.Root = Root;
Modal.Trigger = Trigger;
Modal.Popup = Popup;
Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;

export { Modal, Root, Trigger, Popup, Title, Content, Actions };
