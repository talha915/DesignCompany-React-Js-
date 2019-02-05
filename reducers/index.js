import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import users from './user_reducer';

const rootReducers = combineReducers({
    dataReducer,
    users
});

export default rootReducers;