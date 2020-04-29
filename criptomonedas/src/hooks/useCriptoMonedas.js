import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const useCriptoMoneda = (label, stateInicial, opciones) => {
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">- Seleccione -</option>
                {
                    opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))
                }
            </select>
        </Fragment>
    );

    return [state, SelectCripto, actualizarState];
};

export default useCriptoMoneda;