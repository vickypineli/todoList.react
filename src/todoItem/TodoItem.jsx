import PropTypes from 'prop-types'; 
import { CompleteIcon } from '../todoIcon/CompleteIcon'; // Importando src/todoIcon/CompleteIcon.jsx
import { DeleteIcon } from '../todoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

// Agregando PropTypes para validar las props
TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,  // Propiedad para indicar si el ítem está completado
  onComplete: PropTypes.func.isRequired,  // Función llamada al completar el ítem
  text: PropTypes.string.isRequired,  // Texto del ítem
  onDelete: PropTypes.func.isRequired,  // Función llamada al eliminar el ítem
};

export { TodoItem };
