import {COMMENT_CREAT, COMMENT_DELETE, COMMENT_UPDATE, DECREMENT, INCREMENT, INPUT_TEXT} from "./types";

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