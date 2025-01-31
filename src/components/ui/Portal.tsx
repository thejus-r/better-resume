import { createPortal } from "react-dom";

export default function MyPortal() {
  return (
    <div>
      <Modal>
        <Overlay className="fixed inset-0 h-screen w-screen bg-black/75 backdrop-blur-sm">
          <Content>Hi</Content>
        </Overlay>
      </Modal>
    </div>
  );
}

const Modal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, document.body);
};

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

const Overlay = ({ ...props }: OverlayProps) => {
  return <div {...props} />;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
