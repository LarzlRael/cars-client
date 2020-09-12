import React, { useReducer } from 'react';
//? context
import CarContext from './carsContext';

import { GET_CARS, GET_ONE_CAR } from '../../types';
import carReducer from './carReducer';

import clienteAxios from '../../config/axios';


const CarState = props => {

    const initialState = {

        cars: [],
        errocar: false,
        carSelected: null,
        oneCar: []
    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(carReducer, initialState);

    const getCars = async () => {

        console.log('get car va a funcionar')
        try {
            const resultado = await clienteAxios.get(`/getcarsinfo`);
            //console.log(resultado.data);
            dispatch({
                type: GET_CARS,
                payload: resultado.data
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

    return (
        <CarContext.Provider
            value={{
                //? states
                cars: state.cars,
                oneCar: state.oneCar,

                //* funciones
                getCars,
                getOneCar
            }}
        >
            {props.children}
        </CarContext.Provider>
    )

}


export default CarState;



