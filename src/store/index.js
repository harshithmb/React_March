import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "../reducers";
import thunk from 'redux-thunk';


const ConfigureStore = () => {

    // const combine = combineReducers({
    //     productReducer: productReducer, 
    //     userReducer: userReducer
    // })
    const store = createStore(productReducer, applyMiddleware(thunk))
    return ( store );
}
 
export default ConfigureStore;