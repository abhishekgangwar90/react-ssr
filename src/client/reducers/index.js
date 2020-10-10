import {combineReducers} from 'redux';
import { usersReducers } from './userReducer';

export default combineReducers({
    users: usersReducers
})