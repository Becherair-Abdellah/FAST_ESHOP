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
const hover_Ntf = createSlice({
    name: 'hover_Ntf',
    initialState : false,
    reducers:{
        setIsTop_Ntf:(state)=>{
            return !state;
        },
    }
});
const ClcikSearch = createSlice({
    name: 'ClcikSearch',
    initialState : false,
    reducers:{
        setIsTop_ClcikSearch:(state)=>{
            return state = true ;
        },
        setIsTop_ClcikSearch_false:(state)=>{
            return state = false ;
        },
    }
});
export const {setIsVisible_true,setIsVisible_false} = visible.actions;
export const {setIsTop} = hover.actions;
export const {setIsTop_Ntf} = hover_Ntf.actions;
export const {setIsTop_ClcikSearch_false,setIsTop_ClcikSearch} = ClcikSearch.actions
export  {visible,hover,hover_Ntf,ClcikSearch
}
