import { combineReducers } from 'redux';
import { UserState } from '../types/user';
import userReducer from './reducers/userReducer';


export interface AppState {
    user: UserState; 
}

const rootReducer = combineReducers({
    user: userReducer,  
});

export type RootReducerType = typeof rootReducer;

export default rootReducer;