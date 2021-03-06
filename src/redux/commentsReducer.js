import {COMMENT_CREAT, COMMENT_DELETE, COMMENT_LOAD, COMMENT_UPDATE} from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREAT:
            return {...state, comments: [...state.comments,action.data ]}

        case COMMENT_UPDATE:
            const {data} = action
            const {comments} = state
            const itemIndex = comments.findIndex(res => res.id === data.id)
            const nextComments = [
                ...comments.slice(0, itemIndex), data, ...comments.slice(itemIndex + 1)
            ]
            return {...state, comments: nextComments}

        case COMMENT_DELETE:
            console.log('action', action)
            const newArr = state.comments.filter(el => el.id !== action.id)
            return {...state, comments: newArr}

        case COMMENT_LOAD:
            const newComments = action.data.map(el => {
                return {
                    text: el.name,
                    id: el.id
                }
            })

            return {...state, comments: newComments}
        default:
            return state
    }
}