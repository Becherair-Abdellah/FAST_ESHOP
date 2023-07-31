import { configureStore } from "@reduxjs/toolkit";
import  {visible,hover}  from "./Reducers";
const store = configureStore({
    reducer: {  
        my_visible: visible.reducer,
        hover: hover.reducer,
       }
});
export default store;
