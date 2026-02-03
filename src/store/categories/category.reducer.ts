import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}

export type CategoryMap = {
  [key: string]: CategoryItem[];
}

export type CategoriesState = {
  readonly categories: Category[];
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
