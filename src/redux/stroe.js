import { configureStore } from "@reduxjs/toolkit";
import  {visible,hover,hover_Ntf}  from "./Reducers";
const store = configureStore({
    reducer: {  
        my_visible: visible.reducer,
        hover: hover.reducer,
        hover_Ntf:hover_Ntf.reducer,
       }
});
export default store;
