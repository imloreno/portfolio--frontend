import { useState } from "react";
import type { Work } from "typescript/work";

interface State {
  show: boolean;
  data: Work;
}

interface Return {
  closeModal: () => void;
  showModal: (data: Work) => void;
  modalData: Work;
  modalStatus: boolean;
}

const initialyzeData: Work = {
  title: "",
  img: "",
  description: "",
  tasks: [],
  reference: [{ type: "", url: "" }],
};

const useSwitchModal = () => {
  const [modal, setModal] = useState<State>({
    show: false,
    data: initialyzeData,
  });

  const closeModal = (): void =>
    setModal({ show: false, data: initialyzeData });
  const showModal = (data: Work): void => setModal({ show: true, data });

  const res: Return = {
    closeModal,
    showModal,
    modalData: modal.data,
    modalStatus: modal.show,
  };
  return res;
};

export default useSwitchModal;
