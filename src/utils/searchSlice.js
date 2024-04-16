import {createSlice} from "@reduxjs/toolkit"

const searchSlice=createSlice({
    name:"search",
    initialState:{
        cache:{}
    },
    reducers:{
        cacheResults:(state,action)=>{
            const key=Object.keys(action.payload)[0];
            state.cache[key]=action.payload[key]
            // state=Object.assign(state,action.payload)
            
        }
    }
})

export const {cacheResults}= searchSlice.actions
export default searchSlice.reducer;