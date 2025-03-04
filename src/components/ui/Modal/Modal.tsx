import * as RadixDialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { createContext, useContext } from "react";

const modalContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.05,
      when: "beforeChildren",
      delayChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
  },
};

const modalContentVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const ModalContext = createContext({ open: false });

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
    <ModalContext.Provider value={{ open: open }}>
      <RadixDialog.Root modal open={open} onOpenChange={onOpenChange}>
        {children}
      </RadixDialog.Root>
    </ModalContext.Provider>
  );
};

const Content = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { open } = useContext(ModalContext);
  return (
    <AnimatePresence>
      {open && (
        <RadixDialog.Portal forceMount>
          <motion.div
            variants={modalContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <RadixDialog.Overlay className="fixed inset-0 top-0 left-0 bg-black/25" />
            <AnimatePresence>
              <motion.div variants={modalContentVariants}>
                <RadixDialog.Content className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 overflow-y-auto rounded-t-2xl bg-white md:bottom-1/2 md:w-8/12 md:translate-y-1/2 md:rounded-b-2xl xl:w-5/12">
                  <RadixDialog.Title className="w-full bg-gray-50 p-4 text-lg">
                    {title}
                  </RadixDialog.Title>
                  <div className="p-4">{children}</div>
                </RadixDialog.Content>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </RadixDialog.Portal>
      )}
    </AnimatePresence>
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
