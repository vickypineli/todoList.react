
import PropTypes from 'prop-types'; // Importa PropTypes
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(prevState => !prevState)} // Uso directo de la función en el onClick
    >
      +
    </button>
  );
}

// Validación de props
CreateTodoButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired, // Asegúrate de que setOpenModal sea una función
};

export { CreateTodoButton };
