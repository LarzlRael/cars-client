import { GET_CARS, GET_ONE_CAR } from "../../types";


export default (state, action) => {
    switch (action.type) {
        case GET_CARS:

            return {
                ...state,
                cars: action.payload
            }
        case GET_ONE_CAR:
            return {
                ...state,
                oneCar: action.payload,
                
            }
        default:
            return state;
    }
};