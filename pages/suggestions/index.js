import ShoppingLayout from '../../components/layouts/ShoppingLayout'

const SuggestionPage = () => {
  return (
    <ShoppingLayout>
        <h1 className='text-center'>Crear sugerencia</h1>
        <div className='container'>
            <form>
                <div className='flex'>
                    <label htmlFor='exampleFormControlInput1'>
                        <h4> Título </h4>
                    </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=''>
                        <h4> Mensaje</h4>
                    </label>
                    <textarea 
                        placeholder='Escribe tu sugerencia aquí'
                        className="form-control" rows="4">
                    </textarea>
                    {/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Título de su sugerencia"/> */}
                </div>
                <button
                    type='submit'    
                    onClick={() => alert('Sugerencia enviada')}
                >
                    Enviar
                </button>
                <button
                    type='button'
                >
                    Cancelar
                </button>
            </form>
        </div>
    </ShoppingLayout>
  )
}

export default SuggestionPage