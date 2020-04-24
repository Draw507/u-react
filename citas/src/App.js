import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Use Effect para realizar operaciones cuando el state cambia
  useEffect(() => {
    console.log('Listo');
  }, [citas]); //Crea una dependencia que al cambiar se ejecuta nuevamente el useEffect

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus Citas</h2>
            { citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
