import React, { useReducer } from 'react';
//? context
import CustomerContext from './customerContext';

import { GET_USERS, CLEAR_COSTUMERS, SEARCH_CUSTOMERS } from '../../../types';

import customerReducer from './customerReducer';

import clienteAxios from '../../../config/axios';

const CustomerState = props => {

    const initialState = {
        customers: [],
        errocar: false,
        carSelected: null,
        oneCar: [],
        cargando: true,

        count: 0
    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(customerReducer, initialState);

    const getCustomers = async (from, to) => {

        console.log('desde ' + from + ' | hasta ' + to)
        dispatch({
            type: CLEAR_COSTUMERS,
            payload: []
        })
        try {
            const resultado = await clienteAxios.get(`/users/${from}/${to}`);

            console.log(resultado.data.rows);

            let count = resultado.data.count[0].count;

            // console.log(count)
            dispatch({
                type: GET_USERS,
                payload: { resultado: resultado.data.rows, count }
            })

        } catch (error) {

        }
    }
    const searchCustomers = async (query) => {

        dispatch({
            type: CLEAR_COSTUMERS,
            payload: true
        })

        if ((!query || /^\s*$/.test(query))) {
            console.log('vacio')
            const resultado = await clienteAxios.get(`/users/0/5`);
            let count = resultado.data.count[0].count;


            dispatch({
                type: GET_USERS,
                payload: { resultado: resultado.data.rows, count }
            })

        } 



        try {
            const resultado = await clienteAxios.get(`/users/search/${query}`);

            console.log(resultado.data);

            dispatch({
                type: SEARCH_CUSTOMERS,
                payload: { rows: resultado.data.rows, cargando: false }
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
                count: state.count,



                //* funciones
                getCustomers,
                searchCustomers
            }}
        >
            {props.children}
        </CustomerContext.Provider>
    )

}


export default CustomerState;



