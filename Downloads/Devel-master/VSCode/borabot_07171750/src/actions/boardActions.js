import { LOAD_BOARD_CLEAR, CALL_WRITE, UPDATE_BOARD, DELETE_BOARD } from './actionTypes';
import boardApi from '../api/boardApi';

export function loadBoard() {
    return (dispatch) => {
        return boardApi.getAllContents()
        .then(contents => dispatch({type : LOAD_BOARD_CLEAR, contents}))
        .catch(error => {
            throw(error);
        });
    }
};

export function writeBoard(content) {
    return (dispatch) => {
        return boardApi.saveContent(content)
        .then(content => dispatch({type : CALL_WRITE, content }))
        .catch(error => {
            throw(error);
        });
    }
};

export function updateBoard(content) {
    return (dispatch) => {
        return boardApi.updateContent(content)
        .then(content => dispatch({type : UPDATE_BOARD, content}))
        .catch(error => {
            throw(error);
        });
    }
};

export function deleteBoard(boardId) {
    return (dispatch) => {
        return boardApi.deleteContent(boardId)
        .then(contents => dispatch({type : DELETE_BOARD, contents}))
        .catch(error => {
            throw(error);
        });
    }
};