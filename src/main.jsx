
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './todoContext/TodoContext';
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
