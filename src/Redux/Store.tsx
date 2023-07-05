import { configureStore } from "@reduxjs/toolkit";
import phonesSearchReducer from "./Slices/PhoneSearchSlice";
import phoneReducer from "./Slices/PhoneSlice";

export const store = configureStore({
  reducer: {
    phones: phoneReducer,
    phoneSearch: phonesSearchReducer,
  },
});
