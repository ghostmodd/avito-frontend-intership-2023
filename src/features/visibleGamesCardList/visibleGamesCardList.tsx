import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

type gamesCardsListInitialState = Array<any>;
const initialState: gamesCardsListInitialState = [];

export const visibleGamesCardsListSlice: Slice = createSlice({
  name: "gamesCardsList",
  initialState,
  reducers: {
    setVisibleGamesCardsList(state, action: PayloadAction<Array<any>>) {
      state.splice(0, state.length);
      action.payload.forEach((item) => {
        state.push(item);
      })
    }
  }
});

export const { setVisibleGamesCardsList} = visibleGamesCardsListSlice.actions;
export default visibleGamesCardsListSlice.reducer;
