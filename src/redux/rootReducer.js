import {combineReducers} from "redux";
import {likeReducers} from "./likeReducers";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    like: likeReducers,
    text: inputReducer,
    comments: commentsReducer
})