
import {FaTrashAlt} from 'react-icons/fa'

const Tarea =() =>{
    return(
        <div className='estilo_papelera'>
          <span className='estilo_papelera'>
          <label htmlFor="" className="estilo_papelera"></label>
        </span>
        <button className="btn-delete"><FaTrashAlt/></button>
        </div>
        
    );
  }

  export default Tarea;