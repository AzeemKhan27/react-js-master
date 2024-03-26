import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        post : postReducer //TOOD : add more slices here for posts
        
    }
});

export default store;