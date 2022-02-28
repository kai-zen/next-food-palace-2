import { createSlice } from "@reduxjs/toolkit";
import { allComments } from "../allCommentsInfo";

const initialState = {
    comments: allComments,
}
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, payload) => {
            state.comments.push(payload.payload)
        },
        toggleDeleteComment: (state, payload) => {
            const index = state.comments.findIndex(user => {
                return user.id === payload.payload.id
            });
            state.comments[index].isDeleted = !state.comments[index].isDeleted
        },
    }
})

export default commentsSlice.reducer;
export const { addComment, toggleDeleteComment } = commentsSlice.actions;