import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import homeReducer from "./../screenReducer/home/reducer";

const combineReducer = combineReducers({
    homeReducer
});

const rootReducer = (state,action) =>{
    if(action.type === 'LOGOUT'){
        storage.removeItem('persist:root')
    }
    return combineReducer(state,action)
}

export default rootReducer;