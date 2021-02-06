import { GET_CARS, GET_ONE_CAR, FIND_CARS, NEW_CAR, VIEW_CARS, STAR_LOADING, STOP_LOADING } from "../../types";


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
            }
        case VIEW_CARS:
            return {
                ...state,
                saleRecord: action.payload
            }
        case STAR_LOADING:
            console.log('start loading')
            return {
                ...state,
                cargando: true
            }

        case STOP_LOADING:
            console.log('stop loading')
            return {
                ...state,
                cargando: false
            }
        default:
            return state;
    }
};