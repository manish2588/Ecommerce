import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchVisible:false
  },

  reducers: {
   toggleSearch:(state)=>{
    state.isSearchVisible=!(state.isSearchVisible)
   }
  },
});

export const { toggleSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
