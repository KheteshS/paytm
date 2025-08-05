import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
  value: number;
}

export type { BalanceState };

const initialState: BalanceState = {
  value: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    incrementBalance: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementBalance: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { setBalance, incrementBalance, decrementBalance } =
  balanceSlice.actions;
export default balanceSlice.reducer;
