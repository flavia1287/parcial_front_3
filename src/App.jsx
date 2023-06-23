

import { useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'
import Form from './Components/Forms/Form'

function App() {
  const [persona, setPersona] = useState({
    nombre:'',
    colorFavorito: ''
  })
  const [show, setShow]= useState(false)
  const [error, setError]= useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(persona.nombre.length > 3 && persona.nombre[0]!=' ' && persona.colorFavorito.length >3) {
        setShow(true)
        setError(false)
    } else {
        setError(true)
    }
    

}
console.log(persona)
  return (
    <div className='App'>
      <h1>Elección del color favorito</h1>
      <Form persona= {persona} setPersona={setPersona} handleSubmit={handleSubmit}/>
      {error && 'Por favor chequea que la información sea correcta'}
      {show && <Card persona= {persona}/>} 
    </div>
    
  );
}

export default App;
