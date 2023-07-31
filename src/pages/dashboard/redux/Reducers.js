import { createSlice } from "@reduxjs/toolkit";
// slice of hide or show the aside bar when click in outside to hide it
const visible = createSlice({
    name: 'visibility',
    initialState : 50,
    reducers:{
        setIsVisible_true:(state)=>{
            return state=true;
        },
        setIsVisible_false: (state)=>{
            return state = false;
        }
    }
});
export const {setIsVisible_true,setIsVisible_false} = visible.actions;
export default visible
