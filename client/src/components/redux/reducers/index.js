import { combineReducers } from 'redux';
import products from './student';
import auth from './auth';

export default combineReducers({
    products,
    auth,
}) 