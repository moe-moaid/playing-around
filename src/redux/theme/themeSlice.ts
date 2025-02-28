import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string;
  num: number;
}

const initialState: ThemeState = {
  theme: 'light',
  num: 10,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    numberIncrement: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    },
    numberDecrement: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    },
  },
});

export const { setTheme, numberIncrement, numberDecrement } =
  themeSlice.actions;
export default themeSlice.reducer;
