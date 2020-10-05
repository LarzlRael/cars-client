import React, { useReducer } from 'react';
//? context
import CarContext from './carsContext';

import { GET_CARS, GET_ONE_CAR, FIND_CARS } from '../../types';
import carReducer from './carReducer';

import clienteAxios from '../../config/axios';


const CarState = props => {

    const initialState = {
        cars: [],
        errocar: false,
        carSelected: null,
        oneCar: [],
        cargando:false
    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(carReducer, initialState);

    const getCars = async () => {

        console.log('get car va a funcionar')
        try {
            const resultado = await clienteAxios.get(`/getcarsinfo`);
            // console.log(resultado.data);
            dispatch({
                type: GET_CARS,
                payload: resultado.data.cars
            })

        } catch (error) {

        }
    }

    const getOneCar = async (id) => {
        try {
            const resultado = await clienteAxios.get(`/getImage/${id}`);

            dispatch({
                type: GET_ONE_CAR,
                payload: resultado.data.cars[0]
            })

        } catch (error) {

        }
    }
    //? find cars for fielnd and query
    const findcars = async (field, query) => {
        // let resultado_busqueda;
        // console.log('field: ' + field)
        // console.log('query : ', (parseInt(query.length) + 1))
        try {

            const resultado_busqueda = await clienteAxios.get(`/find/${field}/${query}`);
            // console.log(resultado_busqueda)
            dispatch({
                type: FIND_CARS,
                payload: resultado_busqueda.data.cars
            });

        } catch (error) {


        }
    }

    return (
        <CarContext.Provider
            value={{
                //? states
                cars: state.cars,
                oneCar: state.oneCar,
                cargando: state.cargando,

                
                //* funciones
                getCars,
                getOneCar,
                findcars
            }}
        >
            {props.children}
        </CarContext.Provider>
    )

}


export default CarState;



