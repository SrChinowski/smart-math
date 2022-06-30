import { parseJwt } from "../../utils/helpers";
import Status from "../../utils/status";
import { Write } from "../../utils/write";
import { AppSchema } from "../schema";
import { appLoginService } from "../services/app_d";

const PREFIX = 'APP';
const SET_VALUE = 'SET_VALUE';
const initialState = AppSchema;

const App = Write({ reducer : 'app'})
const User = Write({ reducer : 'user'})


//Actions
export const appLogin = (email, password) => (dispatch, getState) => {
    const appLogin = Status({reducer: 'app', status: 'GET_APP_LOGIN'});

    appLogin.startFetch()

    return appLoginService(email, password)
        .then(({token, first, error}) => {
            console.log(token)
            if(error){
                console.log('ERROR EN SERVICIO')
                appLogin.stopFetch();
            }
            else{
                const {user} = parseJwt(token);
                dispatch(User.setValue('', {
                    username: user.username,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    firstTime: user.firstTime,
                    id: user._id
                }, 'root'))
                dispatch(App.setValue('', {
                    token: token
                }, 'root'))
                localStorage.setItem('catedralToken', token)
                appLogin.stopFetch();
            }
        })
} 

//Reducer
export default function reducer(state = initialState, action){
    switch(action.type){
        case `${PREFIX}/${SET_VALUE}`:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}
