// src/todoIcon/CompleteIcon.jsx

import PropTypes from 'prop-types';
import TodoIcon from './TodoIcon';


const CompleteIcon = ({ completed, onComplete }) => (
  <TodoIcon
    iconPath={'/icons/check.png'}
    color={completed ? 'green' : 'gray'}
    onClick={onComplete}
  />
);

CompleteIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export { CompleteIcon };
