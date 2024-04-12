import {createSlice} from "@reduxjs/toolkit"
const appSlice=createSlice({
    name:"App",
    initialState:{
        isMenuOn:true,
    },
    reducers:{
        toggleMenu:((state)=>{
            state.isMenuOn = ! state.isMenuOn;
        }),
        closeMenu:((state)=>{
            state.isMenuOn=false;
        }),
    }
})

export const{toggleMenu,closeMenu}=appSlice.actions
export default appSlice.reducer;