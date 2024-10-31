import PropTypes from 'prop-types';
import  TodoIcon  from './TodoIcon';

const DeleteIcon = ({ onDelete }) => (
  <TodoIcon type="delete" onClick={onDelete} />
);

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export { DeleteIcon };
