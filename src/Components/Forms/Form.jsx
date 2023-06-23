
import React from 'react'

const Form = ({persona, setPersona, handleSubmit} ) => {

  
    const handleChange = (e)  =>{
        setPersona({
            ...persona,
            [e.target.name]:e.target.value
        })
    }

   
  return (
   
        <form onSubmit={handleSubmit}>
            <label >Nombre: </label>
            <input name ="nombre" type="text"  onChange={handleChange}/>
            <label >Color Favorito: </label>
            <input name="colorFavorito" type="text"  onChange={handleChange}/>
            <button>Subir</button>
           
        </form>

  )
}


export default Form