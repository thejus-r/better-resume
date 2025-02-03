import { Button, ButtonIcon } from "@components/ui/Button";
import { Pencil, Person } from "@phosphor-icons/react";
import * as Modal from "@components/ui/Modal";

export const PersonalSection = () => {
  return (
    <Modal.Root>
      <div className="p-2">
        <div className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gray-100 p-1.5">
          <div className="flex items-center justify-center rounded-xl bg-gray-800 fill-white p-2.5">
            <Person className="fill-inherit" />
          </div>
          <h3 className="w-full font-mono text-sm uppercase text-gray-800">
            Personal Section
          </h3>
          <Modal.Trigger>
            <Button>
              <ButtonIcon>
                <Pencil />
              </ButtonIcon>
              Edit
            </Button>
          </Modal.Trigger>
        </div>
        <div>Content</div>
      </div>
      <Modal.Popup>
        <Modal.Title>Change your peronal details</Modal.Title>
        <Modal.Content>
          <form>
            <label htmlFor="text">Your Name</label>
            <input type="text" placeholder="enter your name" />
          </form>
        </Modal.Content>
      </Modal.Popup>
    </Modal.Root>
  );
};
