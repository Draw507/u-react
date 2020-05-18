import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    const { proyecto } = proyectosContext;
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            });
        }
    }, [tareaseleccionada]);

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring
    const [proyectoActual] = proyecto;

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        if(tareaseleccionada === null){
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
            limpiarTarea();
        }    

        obtenerTareas(proyectoActual.id);

        guardarTarea({nombre: ''});
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;