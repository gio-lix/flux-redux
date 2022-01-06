import {
    COMMENT_CREAT,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    DECREMENT,
    INCREMENT,
    INPUT_TEXT,
    COMMENT_LOAD,
    LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF
} from "./types";

export function incrementLike() {
    return {
        type: INCREMENT
    }
}
export function decrementLikes() {
    return {
        type: DECREMENT
    }
}
export function inputText(text) {
    return {
        type: INPUT_TEXT, text: text
    }
}
export function commentsCreat(text, id) {
    return {
        type: COMMENT_CREAT, data: {text, id}
    }
}
export function commentsUpdate(text, id) {
    return {
        type: COMMENT_UPDATE, data: {text, id}
    }
}
export function commentsDelete( id) {
    return {
        type: COMMENT_DELETE, id
    }
}
export function loadingOn() {
   return async (dispatch) => dispatch({type: LOADER_DISPLAY_ON })
}
export function loadingOff() {
    return async (dispatch) => dispatch({type: LOADER_DISPLAY_OFF })
}

export function errorOn(text) {
    return async (dispatch) => dispatch({type: ERROR_DISPLAY_ON, text })
}
export function errorOff() {
    return async (dispatch) => dispatch({type: ERROR_DISPLAY_OFF })
}


export function commentsLoad() {
    return async dispatch => {
       try {
           dispatch(loadingOn())
           const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
           const jsonData = await response.json()
           dispatch({type: COMMENT_LOAD, data: jsonData })
           dispatch(loadingOff())
           dispatch(errorOff())
       } catch (err) {
           dispatch(loadingOff())
           dispatch(errorOn('something went srong'))
       }
    }
}