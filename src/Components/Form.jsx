
import { useState } from 'react'

const Form = () => {

  const [persona, setPersona] = useState({
        nombre:'',
        colorFavorito: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(persona.nombre.length > 3 && persona.nombre[0]!=' ' && persona.colorFavorito.length >6) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
        
    }
    console.log(persona)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input type="text" disabled={show} onChange={(event) => setPersona({...persona, nombre: event.target.value })} />
            <label >Color Favorito: </label>
            <input type="text" disabled={show} onChange={(event) => setPersona({...persona, colorFavorito: event.target.value, })}/>
            <button>Subir</button>
            {error && 'Por favor chequea que la información sea correcta'}
        </form>

        {show ? 
            <>
                <h3> {persona.nombre}</h3>
                <h3>Tu color favorito es  {persona.colorFavorito}.</h3>
            </>
            :
            null
        }


    </div>
  )
}

export default Form