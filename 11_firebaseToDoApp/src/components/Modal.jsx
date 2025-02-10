import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import modals from "../modals";
import { modalClose } from "../utils";

const Modal = ({ name, data }) => {
  const currentModal = modals.find((i) => i.name === name);

  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(modalClose, 200);
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className=" relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="backdrop-blur-xs fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className=" flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full relative max-w-md transform overflow-hidden rounded-2xl bg-indigo-400 text-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle className="text-center text-2xl mt-2">
              ToDo Düzenle
            </DialogTitle>
            <Button
              onClick={closeModal}
              className="cursor-pointer absolute text-md right-6 top-4"
            >
              X
            </Button>
            <currentModal.element close={closeModal} data={data} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
