import React from 'react';

const Gasto = ({ gasto }) => ( 
    <li className="gastos">
        {gasto.nombre}        
        <p className="gasto">$ {gasto.cantidad}</p>
    </li>
 );

export default Gasto;