import React, { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const UploadModal = ({ children }) => {
  const uploadDropRef = useRef();
  const dropRef = useRef<HTMLDivElement>();
  const [dragCounter, setDragCounter] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(1 + dragCounter);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      onOpen();
    }
  };

  useEffect(() => {
    let div = dropRef.current;
  }, []);

  return (
    <div>
      <div className={isOpen ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="box modal-content has-text-black">
          <b>Want to upload a file?</b>
          <p> It's easy! just drag it into here! </p>
          <div ref={uploadDropRef} className="upload-modal flex-center">
            <p>Drop image here</p>
          </div>
        </div>
        <input
          type="file"
          className="modal-close is-large"
          aria-label="close"
          onClick={onOpen}
        ></input>
      </div>
      <div ref={dropRef}>{children}</div>
    </div>
  );
};

export default UploadModal;
