import React, {useContext} from 'react';  
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //Obtener el state
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    const { proyectoActual } = proyectosContext;
    const { obtenerTareas } = tareasContext;

    //Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //Fijar el proyecto actual
        obtenerTareas(id); //Filtrar las tareas
    };

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;