import { GET_CARS, GET_ONE_CAR, FIND_CARS, NEW_CAR } from "../../types";


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
        case NEW_CAR:
            return {
                ...state,
                cargando: false
            }
        default:
            return state;
    }
};