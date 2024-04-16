import {createSlice} from "@reduxjs/toolkit"

const showSearchSuggestionSlice=createSlice({
    name:"showSearchSuggestionSlice",
    initialState:{
        show:false,
    },
    reducers:{
        showsSearchSuggestionContainer:(state,action)=>{
            state.show=action.payload;
        }
            
        },
    },
);
export const {showsSearchSuggestionContainer}=showSearchSuggestionSlice.actions;
export default showSearchSuggestionSlice.reducer