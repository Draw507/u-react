import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Resultado = ({cotizacion}) => {
    return ( 
        (cotizacion === 0) ? <p>Elige marca, año y tipo de seguro</p> : 
        (
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >
                    <span>{cotizacion}</span>
                </CSSTransition>
            </TransitionGroup>
        )
    );
}
 
export default Resultado;