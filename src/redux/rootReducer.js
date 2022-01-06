import {combineReducers} from "redux";
import {likeReducers} from "./likeReducers";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    like: likeReducers,
    text: inputReducer,
    comments: commentsReducer,
    app: appReducer
})