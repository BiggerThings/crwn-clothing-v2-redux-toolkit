import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Category = {
  id: string;
  name: string;
}

export type CategoriesState = {
  categories: Category[];
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action:  PayloadAction<Category[]>) {
      state.categories = action.payload;
    }
  }
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
