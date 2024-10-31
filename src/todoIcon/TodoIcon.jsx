
import PropTypes from 'prop-types';
import CheckSVG from './check.svg';
import DeleteSVG from './delete.svg';
import './TodoIcon.css';

// const iconTypes = {
//   "check": color => (
//     <img src={CheckSVG} className="Icon-svg Icon-svg--check" alt="Check" />
//   ),
//   "delete": color => (
//     <img src={DeleteSVG} className="Icon-svg Icon-svg--delete" alt="Delete" />
//   ),
// };

const iconTypes = {
    "check": color => (
      <img src={CheckSVG} className="Icon-svg Icon-svg--check" alt="Check" style={{ fill: color }} />
    ),
    "delete": color => (
      <img src={DeleteSVG} className="Icon-svg Icon-svg--delete" alt="Delete" style={{ fill: color }} />
    ),
  };
// const iconTypes = {
//     "check": color => (
//       <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
//     ),
//     "delete": color => (
//       <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
//     ),
//   };

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

TodoIcon.propTypes = {
  type: PropTypes.oneOf(['check', 'delete']).isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};



export default TodoIcon;
