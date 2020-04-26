import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {
  const [presupuesto, guardarPresupuesto] = useState();
  const [restante, guardarRestante] = useState();
  const [mostrarPregunta, actualizarPregunta] = useState(true);

  return (
    <div>
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarPregunta ? 
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :  
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">2</div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
