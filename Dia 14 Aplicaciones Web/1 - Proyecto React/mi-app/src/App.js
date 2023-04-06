import React from 'react';

function App(props) {
  let [contador, setearConteo] = React.useState(0);

  function aumentarConteo() {
    setearConteo(contador + 1);
  }

  return (
    <div style={{backgroundColor: props.colorFondo}}>
      <h1 style={{color: props.colorTexto}}>Contador: {contador}</h1>
      <button onClick={aumentarConteo}>Incrementar</button>
    </div>
  );
}

export default App;
