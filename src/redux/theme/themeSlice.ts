import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: string;
  num: number;
  asyncNum: number;
}

const initialState: ThemeState = {
  theme: 'light',
  num: 10,
  asyncNum: 10,
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
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
      console.log("incrementing in pending");
      
    }).addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.asyncNum = action.payload;
    })
  }
});


export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const decremenAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { setTheme, numberIncrement, numberDecrement } =
  themeSlice.actions;
export default themeSlice.reducer;
