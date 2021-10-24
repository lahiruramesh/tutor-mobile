import React, {useState, useEffect} from 'react';
import {Modal, Text} from 'native-base';
export default function CreateMetaData({openModal}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(openModal);
  }, [openModal]);

  return (
    <>
      <Modal isOpen={showModal} onClose={setShowModal(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create Course: meta data</Modal.Header>
          <Modal.Body>
            <Text>Testing Modal</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
