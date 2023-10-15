
export default function AddTarea() {
  return (
    <div className="estilo_tarea">
      <form>
        <input 
        type="text" 
        className='input-add' 
        name='description' 
        />
        <button className="estilo_tarea" type='submit'>
            ADD
        </button>
    </form>
    </div>
    
  )
}
