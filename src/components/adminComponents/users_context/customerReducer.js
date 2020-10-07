import { GET_USERS, CLEAR_COSTUMERS, SEARCH_CUSTOMERS } from "../../../types";


export default (state, action) => {
    switch (action.type) {
        case GET_USERS:
            console.log(action.payload.resultado)

            return {
                ...state,

                customers: action.payload.resultado,
                count: action.payload.count,
                cargando: false
            }
        case CLEAR_COSTUMERS:

            return {
                ...state,
                customers: [],
                cargando: action.payload
            }
        case SEARCH_CUSTOMERS:
            return {
                ...state,
                customers: action.payload.rows,
                cargando: action.payload.cargando
            }
        default:
            return state;
    }
};