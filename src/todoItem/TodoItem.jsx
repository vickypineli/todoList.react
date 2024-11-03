import PropTypes from 'prop-types';
import { useState } from 'react';
import { CompleteIcon } from '../todoIcon/CompleteIcon';
import { DeleteIcon } from '../todoIcon/DeleteIcon';
import './TodoItem.css';

const TodoItem = ({ initialCompleted, onComplete, text, onDelete }) => {
  const [completed, setCompleted] = useState(initialCompleted);

  const handleToggleComplete = () => {
    setCompleted((prevCompleted) => !prevCompleted);
    onComplete();
  };

  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={handleToggleComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
};

TodoItem.propTypes = {
  initialCompleted: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoItem };
