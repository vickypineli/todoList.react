//src/todoIcon/TodoIcon.jsx
import PropTypes from 'prop-types';
import './TodoIcon.css';

function TodoIcon({ iconPath, color, size=30, onClick }) {
  return (
    <span
      className={`Icon-container`} // Clase para estilos en CSS
      onClick={onClick}
      style={{
        width: size,
        height: size,
        color, // Color controlado en el contenedor
      }}
    >
      <img
        src={iconPath}
        alt="icon"
        className="Icon-svg"
        style={{
          filter: color === 'gray' ? 'grayscale(100%)' : 'none', // Opción para escala de grises
        }}
      />
    </span>
  );
}

TodoIcon.propTypes = {
  iconPath: PropTypes.string.isRequired, // Ruta del icono SVG
  color: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default TodoIcon;
