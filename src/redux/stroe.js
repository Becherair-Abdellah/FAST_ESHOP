import { configureStore } from "@reduxjs/toolkit";
import  {visible,hover,hover_Ntf,ClcikSearch}  from "./Reducers";
const store = configureStore({
    reducer: {  
        my_visible: visible.reducer,
        hover: hover.reducer,
        hover_Ntf:hover_Ntf.reducer,
        isClick : ClcikSearch.reducer
       }
});
export default store;
