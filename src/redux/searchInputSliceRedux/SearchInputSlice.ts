import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchInputState {
  value: string;
}

const initialState: SearchInputState = {
  value: "",
};

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.value = action.payload;
    },
    clearSearchInput: (state) => {
      state.value = "";
    },
  },
});

export const { setSearchInput, clearSearchInput } = searchInputSlice.actions;

export const selectSearchInput = (state: RootState) => state.searchInput.value;

export default searchInputSlice;
