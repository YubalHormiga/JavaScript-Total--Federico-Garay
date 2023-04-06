import React from 'react';
import Saludo from './Saludo';
import Mensaje from './Mensaje';

function App() {
  return (
    <div>
      <Saludo nombre="Juan"/>
      <Mensaje mensaje="Bienvenido a mi aplicacion React"/>
      <Saludo nombre="Federico"/>
    </div>
  )
}

export default App;