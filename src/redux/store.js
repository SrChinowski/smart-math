import {
    createStore, 
    applyMiddleware, 
    combineReducers,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import app from './ducks/app_d'
import user from './ducks/user_d'
import { Interceptor } from './services/api';
// list ducks'
// ducks normalized name = name_d.ts


// combine reducers
const rootReducer = combineReducers({
    app,
    user
});


const composeEnhancers = (window )['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const STORE = createStore(
    rootReducer, 
    composeEnhancers( applyMiddleware(thunk))
);

Interceptor(STORE);  
export default STORE;