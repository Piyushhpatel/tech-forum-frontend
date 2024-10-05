import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        addPost: (state, action) => {
            state.posts.push(action.payload);
        },

        upvotePost: (state, action) => {
            const {id} = action.payload;
            const post = state.posts.find((post) => post._id === id);

            if(post){
                post.upvotes += 1;
            }
        },
        
        downvotePost: (state, action) => {
            const {id} = action.payload;
            const post = state.posts.find((post) => post._id === id);

            if(post){
                post.downvotes += 1;
            }
        },

        deletePost: (state, action) => {
            const {id} = action.payload;
            state.posts = state.posts.filter((post) => post._id !== id);
        }
    }
})


export const { setPosts, addPost, upvotePost, downvotePost, deletePost } = postSlice.actions;
export default postSlice.reducer;