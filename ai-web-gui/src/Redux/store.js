// import { ReactReduxContext } from "react-redux";
// import {createStore,applyMiddleware} from ReactReduxContext;
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore,persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

let persistConfigKey = (process.env.NODE_ENV === "development")? 
"root-" + process.env.NODE_ENV:
"root-" + process.env.NODE_ENV;

const persistConfig={
    key: persistConfigKey,
    storage:storage,
    timeout:10000
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV && process.env.REACT_APP_ENV != 'production'){
    middlewares.push(logger)
}

const bindMiddleware = middleware =>{
    if(process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV && process.env.REACT_APP_ENV != 'production'){
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const store = createStore(persistedReducer,undefined,bindMiddleware(middlewares));
const persistor = persistStore(store);

export {store,persistor}

