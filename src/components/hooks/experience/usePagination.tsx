import { useState } from "react";

const usePagination = (length: number): any => {
  const [numPag, setNumPag] = useState(0);

  //Previous image
  const handlePrev = () => {
    if (numPag > 0) {
      setNumPag(numPag - 1);
    } else {
      setNumPag(length - 1);
    }
  };
  //Next image
  const handleNext = () => {
    if (numPag < length - 1) {
      setNumPag(numPag + 1);
    } else {
      setNumPag(0);
    }
  };
  //set numPag
  const handleSet = (target: number) => {
    setNumPag(target);
  };

  return { numPag, handlePrev, handleNext, handleSet };
};

export default usePagination;
