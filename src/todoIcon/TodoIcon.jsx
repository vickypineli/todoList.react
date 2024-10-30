import PropTypes from 'prop-types';
import CheckSVG  from './check.svg';
import DeleteSVG from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

const TodoIcon = ({ type, color = 'gray', onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};

TodoIcon.propTypes = {
  type: PropTypes.oneOf(['check', 'delete']).isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export { TodoIcon };
