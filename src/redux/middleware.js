import {COMMENT_CREAT} from "./types";
import {useDispatch} from "react-redux";
import {errorOn} from "./action";

const badWords = ['fuck', 'hate']

export function spamFilter({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREAT) {
                console.log('spamFilter' , action.data.text)
                const hasBadWords = badWords.some(el => action.data.text.includes(el))
                if  (hasBadWords) {
                   return  dispatch(errorOn('OOPs, bed words'))
                }
            }

            return next(action)
        }
    }
}