import { createSlice } from "@reduxjs/toolkit";
import { Phone_Data } from "../../phone_data";

export const phoneSearchSlice = createSlice({
  name: "phoneSearch",
  initialState: {
    phones: [],
    searchedPhones: Phone_Data,
  },
  reducers: {
    handleSearchPhones: (state, action) => {
      state.searchedPhones = [];
      state.searchedPhones.push(action.payload);
    },
  },
});

export const { handleSearchPhones } = phoneSearchSlice.actions;
export default phoneSearchSlice.reducer;
