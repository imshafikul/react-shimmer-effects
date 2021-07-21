import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import PropTypes from "prop-types";
import { codeIcon, closeIcon } from "../../assets";

const CodePreview = ({ title, code }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <div>
      <Modal show={modal} size="lg" onHide={toggleModal}>
        <Modal.Header onClick={toggleModal}>
          <Modal.Title>{title}</Modal.Title>
          <Button variant="link" className="btn-sm" onClick={toggleModal}>
            <img width="30" src={closeIcon} alt="code" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <CopyBlock
            language="jsx"
            text={code}
            codeBlock
            theme={atomOneLight}
            showLineNumbers={false}
          />
        </Modal.Body>
      </Modal>

      <Button variant="link" className="btn-sm" onClick={toggleModal}>
        <img width="30" src={codeIcon} alt="Close" />
      </Button>
    </div>
  );
};

CodePreview.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CodePreview;
