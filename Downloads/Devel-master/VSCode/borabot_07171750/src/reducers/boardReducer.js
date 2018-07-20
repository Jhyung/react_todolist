import { LOAD_BOARD_CLEAR, CALL_WRITE, UPDATE_BOARD, DELETE_BOARD } from '../actions/actionTypes';
import initState from './initState';

export default function boardReducer(state = initState.contents, action) {
    switch(action.type) {
        case LOAD_BOARD_CLEAR : 
            return action.contents;

        case CALL_WRITE :
            return [
                ...state,
                Object.assign({}, action.content)
            ];
        
        case UPDATE_BOARD :
            return [
                ...state.filter(content => content.id !== action.content.id),
                Object.assign({}, action.content)
            ].sort((a,b) => a.id > b.id);
        
        case DELETE_BOARD :
            return [
                ...Object.assign({}, action.content)
            ]

        default : 
            return state;
    }
}