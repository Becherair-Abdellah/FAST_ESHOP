import { createSlice } from "@reduxjs/toolkit";
// slice of hide or show the aside bar when click in outside to hide it
const visible = createSlice({
    name: 'visibility',
    initialState : true,
    reducers:{
        setIsVisible_true:(state)=>{
            return state=true;
        },
        setIsVisible_false: (state)=>{
            return state = false;
        }
    }
});
const hover = createSlice({
    name: 'hover',
    initialState : false,
    reducers:{
        setIsTop:(state)=>{
            return !state;
        },
    }
});
export const {setIsVisible_true,setIsVisible_false} = visible.actions;
export const {setIsTop} = hover.actions;
export  {visible,hover
}
