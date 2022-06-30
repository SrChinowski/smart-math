import { getUserImageService } from "../services/user_d";
import { UserSchema } from "../schema";
import {Write} from "../../utils/write"
import Status from "../../utils/status"

const initialState = {...UserSchema}

const PREFIX = 'USER';
const SET_VALUE = 'SET_VALUE';

const User = Write({reducer: 'user'})

//Action Example 
export const getUserImage = (userId) => (dispatch, getState) => {
    const getUserData = Status({reducer: 'user', status: 'GET_USER_IMG'});    //Configuramos el listener llamandolo de los status globales 
    dispatch(getUserData.startFetch()); //Indicamos que inicia el fetch
    return getUserImageService(userId) //Regresamos la funcion de services donde estara la logica de la llamada 
        .then(({results})  => {
            dispatch(User.setValue('name', results[0].name)); //Seteamos la info en el store
            dispatch(getUserData.stopFetch()); //Indicamos que el proceso acabo
        }) 
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}