import './App.css'
import AddTarea from './components/AddTarea'
import './components/ListaTareas'
import ListaTareas from './components/ListaTareas'
import './components/Botonn'
import './styles/estilos.css'
import Botonn from './components/Botonn'
import Tarea from './components/Tarea'
function App() {
  return (
    <>
        <div>
          <h2 className='h2'>Lista de Tareas de Benjamin :)</h2>
        </div>
        <div className='add_tarea'>
          <AddTarea></AddTarea>
        </div>
        <div className='h1'>
          <ListaTareas>
          </ListaTareas>
         <Botonn></Botonn>
        </div>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
        <Tarea></Tarea>
    </>
  )
}

export default App
