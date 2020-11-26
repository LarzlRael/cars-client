import React, { useReducer } from 'react';
//? context
import CarContext from './carsContext';

import { GET_CARS, GET_ONE_CAR, FIND_CARS, NEW_CAR, VIEW_CARS } from '../../types';
import carReducer from './carReducer';

import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';


const CarState = props => {

    const initialState = {
        cars: [],
        errocar: false,
        carSelected: null,
        oneCar: [],
        cargando: false,
        saleRecord: []


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

    //? Send new Car been Admin

    const newCar = async (car, file) => {
        console.log(car, file);
        let form = new FormData();

        form.append('myImage', file);
        form.append('name_car', car.name_car);
        form.append('price', car.price);
        form.append('description', car.description);
        form.append('maker', car.maker);
        form.append('status', car.status);
        form.append('model', car.model);

        try {
            const sendData = await clienteAxios.post(`/new-image`, form);
            console.log(sendData);
            Swal.fire({
                title: 'Nuevo Carro Agreado ',
                text: 'Agregado Correctamente',
                icon: 'success',
                confirmButtonText: 'Continuar'
            });

            dispatch({
                type: NEW_CAR,


            });

        } catch (error) {


        }
    }
    const viewSaleRecord = async () => {
        try {

            const saleRecord = await clienteAxios.get(`/venta/history`);
            //console.log(saleRecord.data.salesRecords);
            // console.log(resultado_busqueda)

            dispatch({
                type: VIEW_CARS,
                payload: saleRecord.data.salesRecords
            });

        } catch (error) {

        }
    }
    const payCar = async (id_user, id_car, price) => {
        try {

            const pay = await clienteAxios.post(`/venta/pagar`, {
                id_user,
                id_car,
                price
            });
            console.log(pay.data);
            //console.log(saleRecord.data.salesRecords);
            // console.log(resultado_busqueda)

            // dispatch({
            //     type: PAY_CAR,
            //     payload: saleRecord.data.salesRecords
            // });

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
                saleRecord: state.saleRecord,


                //* funciones
                getCars,
                getOneCar,
                findcars,
                newCar,
                viewSaleRecord,
                payCar
            }}
        >
            {props.children}
        </CarContext.Provider>
    )

}


export default CarState;



