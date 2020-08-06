import todoReducer from '../reducers'
import loadingReducer from '../reducers/loading'
import { createStore, combineReducers } from 'redux'

const store = createStore(combineReducers({todoReducer, loadingReducer}));

export default store;