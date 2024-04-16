import {createSlice} from "@reduxjs/toolkit"

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        AddMessage:(state,action)=>{
            // state.messages.splice(20,1);
            if(state.messages.length>10){
                state.messages.shift();
            }
            
            state.messages.push(action.payload);
        }
    }
})
export const {AddMessage}=chatSlice.actions;

export default chatSlice.reducer;