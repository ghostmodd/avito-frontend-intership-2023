import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

type GameCardProps = {
  imageLink: string,
  title: string,
  publisher: string,
  release_date: string,
  genre: string,
  platform: string,
};

type gamesCardsListInitialState = Array<GameCardProps>;
const initialState: gamesCardsListInitialState = [];

export const visibleGamesCardsListSlice: Slice = createSlice({
  name: "gamesCardsList",
  initialState,
  reducers: {
    setVisibleGamesCardsList(state, action: PayloadAction<Array<GameCardProps>>) {
      state.splice(0, state.length);
      action.payload.forEach((item) => {
        state.push(item);
      })
    },

  }
});

export const { setVisibleGamesCardsList} = visibleGamesCardsListSlice.actions;
export default visibleGamesCardsListSlice.reducer;
