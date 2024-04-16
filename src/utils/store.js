import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import showSearchSuggestionSlice from "./showSearchSuggestionSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        chat:chatSlice,
        search:searchSlice,
        showSearchSuggestions:showSearchSuggestionSlice,
    }
})
export default store;