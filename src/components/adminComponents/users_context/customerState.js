import React, { useReducer } from 'react';
//? context
import CustomerContext from './customerContext';

import { GET_USERS } from '../../../types';

import customerReducer from './customerReducer';

import clienteAxios from '../../../config/axios';

const CustomerState = props => {

    const initialState = {
        customers: [],
        errocar: false,
        carSelected: null,
        oneCar: [],
        cargando: true
    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(customerReducer, initialState);

    const getCustomers = async () => {

        console.log('Obteniendo usuarios')
        try {
            const resultado = await clienteAxios.get(`/users`);
            console.log(resultado.data);
            dispatch({
                type: GET_USERS,
                payload: resultado.data
            })

        } catch (error) {

        }
    }


    return (
        <CustomerContext.Provider
            value={{
                //? states
                customers: state.customers,
                cargando: state.cargando,

                //* funciones
                getCustomers
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    )

}


export default CustomerState;



