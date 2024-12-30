import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "./type";

const initialState: ICategory = {
  id: 0,
  name: "",
};

export const CategoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setCategories } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
