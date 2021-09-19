import '../style.css';
import React, { useEffect  } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
  useEffect(() => {window.addEventListener('keydown', handleKeyDown); })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };
  
  const { srcImg, altImg } = props;
  
    return createPortal(
        <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img width="800" height="600"  src={srcImg} alt={altImg} />
          </div>
         </div>,
      modalRoot,
    );
}

Modal.propTypes = {
    srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired
}


