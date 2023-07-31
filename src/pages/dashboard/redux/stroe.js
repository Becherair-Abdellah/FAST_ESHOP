import { configureStore } from "@reduxjs/toolkit";
import  visible  from "./Reducers";
const store = configureStore({
    reducer: {  
        my_visible: visible.reducer
       }
});
export default store;
