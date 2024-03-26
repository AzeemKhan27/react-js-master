import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    // You can add more state properties here if needed
};

const postSlice = createSlice({
     name: "post",
     initialState,
     reducers: {
        addPost: (state, action) => {
           state.posts.push(action.payload.post);
        },
        // You can define more reducers here for updating or deleting posts
     }
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
