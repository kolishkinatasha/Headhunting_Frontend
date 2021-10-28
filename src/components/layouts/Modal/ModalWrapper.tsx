import { Icon, Modal } from '@ff/ui-kit';
import { observer } from 'mobx-react';
import React from 'react';

import classes from './Modal.module.scss';

type ModalWrapperProps = {
  button: any;
};

const ModalWrapper: React.FC<ModalWrapperProps> = observer(
  ({ button, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };
    return (
      <div className={classes.modalBox}>
        <div
          role="button"
          onClick={openModal}
          onKeyDown={openModal}
        >{button}
        </div>
        <Modal
          className={classes.modal}
          onBackdropClick={closeModal}
          visible={isOpen}
          width="1200px"
        >
          <div onClick={closeModal} onKeyDown={openModal} role="button" className={classes.close_button}>
            <Icon name="close" />
          </div>
          {children}
        </Modal>
      </div>
    );
  },
);

export default ModalWrapper;
