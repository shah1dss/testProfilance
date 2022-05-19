import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
  userReducer,
  newsReducer,
});
