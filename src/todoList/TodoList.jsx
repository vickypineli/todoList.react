import PropTypes from 'prop-types'; // Asegúrate de importar PropTypes
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

// Agregando PropTypes para validar las props
TodoList.propTypes = {
  children: PropTypes.node.isRequired,  // Valida que children pueden ser cualquier tipo de nodo de React
};

export { TodoList };
