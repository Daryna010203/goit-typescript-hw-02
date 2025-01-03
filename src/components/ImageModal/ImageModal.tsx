import ReactModal from 'react-modal';

import { useEffect } from 'react';
import css from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
  imageAlt,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onRequestClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      ariaHideApp={false}
    >
      <button onClick={onRequestClose} className={css.closeButton}>
        ✖
      </button>
      <img src={imageUrl} alt={imageAlt} className={css.largeImage} />
    </ReactModal>
  );
};

export default ImageModal;
