import * as RadixDialog from "@radix-ui/react-dialog";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  open: boolean,
}

// Default Value for Context
const ModalContext = createContext<ModalContextType>({ open: false })

const Modal = ({ children }: { children: React.ReactNode }) => {

  const [open, setOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={{ open: open }}>
    <RadixDialog.Root open={open} onOpenChange={setOpen}>{children}</RadixDialog.Root>
  </ModalContext.Provider>
};

const Popup = ({ children }: { children: React.ReactNode }) => {
  const { open } = useContext(ModalContext)

  if (open != true) {
    return <div></div>
  }
  return <RadixDialog.Portal forceMount>
    <RadixDialog.Overlay className="fixed inset-0 left-0 top-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <RadixDialog.Content className="w-1/3 overflow-clip rounded-2xl bg-white">
        {children}
      </RadixDialog.Content>
    </RadixDialog.Overlay>
  </RadixDialog.Portal>
}

const Title = ({ children }: { children: string }) => {
  return <RadixDialog.Title className="bg-gray-100 p-4 text-base font-normal">{children}</RadixDialog.Title>
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>
};

const Trigger = RadixDialog.Trigger;
const Root = Modal;
Modal.Root = Root;
Modal.Trigger = Trigger;
Modal.Popup = Popup;
Modal.Title = Title;
Modal.Content = Content;

export { Modal, Root, Trigger, Popup, Title, Content };
