import { GET_CARS, GET_ONE_CAR, FIND_CARS } from "../../types";


export default (state, action) => {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.payload,
                cargando: true
            }
        case GET_ONE_CAR:
            return {
                ...state,
                oneCar: action.payload,

            }
        case FIND_CARS:
            return {
                ...state,
                cars: action.payload
            }
        default:
            return state;
    }
};