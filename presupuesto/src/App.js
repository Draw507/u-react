import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [presupuesto, guardarPresupuesto] = useState();
  const [restante, guardarRestante] = useState();
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    guardarGastos([...gastos, gasto]);
  };

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
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante} 
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
