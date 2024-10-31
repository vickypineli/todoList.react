
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ children }) {
  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;