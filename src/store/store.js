/**
 * Created by naube on 2017-09-28.
 */

//To create store + middlewares
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

//Importing reducers
import mainReducer from '../reducers/mainReducer';

export default createStore(
    combineReducers({
        mainReducer
    }),
    applyMiddleware(createLogger(), thunk)
);
