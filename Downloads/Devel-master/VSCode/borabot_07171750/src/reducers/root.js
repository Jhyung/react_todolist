import { combineReducers } from 'redux';
import board from './boardReducer';

const rootReducer = combineReducers({
    contents: board
});

export default rootReducer;