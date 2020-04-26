import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [presupuesto, guardarPresupuesto] = useState();
  const [restante, guardarRestante] = useState();
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto) {
      guardarGastos([...gastos, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, restante, gastos]);

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
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
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
