import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Phone_Data } from "../../phone_data";
import axios from "axios";

type PhoneType = {
  phones: Array<{
    id: number;
    img: string;
    name: string;
    description: string;
    discountprice: number | string;
    price: number | string;
    category: string;
    condition: string;
    filter: string;
  }>;
  status: string;
  error: string | undefined;
};

const initialState: PhoneType = {
  phones: [],
  status: "idle",
  error: "",
};

export const fetchData = createAsyncThunk("phones/fetchData", async () => {
  const response = await axios.get("http://localhost:8000/product/getAll");
  return response.data;
});

export const phoneSlice = createSlice({
  name: "phones",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.phones = [...state.phones, action.payload];
    },
    getPhones: (state, action) => {
      state.phones = [...action.payload];
    },
    filterPhones: (state, action) => {
      const { filterCondition } = action.payload;
      state.phones = state.phones.filter((phone) => filterCondition(phone));
    },
    searchByName: (state, action) => {
      const filteredResult = state.phones.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredTitle:
          action.payload.length > 0 ? filteredResult : [...state.phones],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.phones = [];
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.phones = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export const { create, getPhones, filterPhones, searchByName } =
  phoneSlice.actions;
export default phoneSlice.reducer;
function getTodos(data: any) {
  throw new Error("Function not implemented.");
}
