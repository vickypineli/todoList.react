// src/todoIcon/DeleteIcon.jsx

import PropTypes from 'prop-types';
import TodoIcon from './TodoIcon';


const DeleteIcon = ({ onDelete }) => (
  <TodoIcon
    iconPath={'/icons/delete.png'} 
    color="red" // Color controlado en el contenedor
    onClick={onDelete}
  />
);

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export { DeleteIcon };
