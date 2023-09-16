import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"
import { gamesCardsListInitialStateInterface } from "./gameCardsInitialStateInterface"
import { GameCardConfig } from "../../components/GameCard/GameCardConfig"

const initialState: gamesCardsListInitialStateInterface = {
  gamesCardsList: [],
  visibleGamesCardsList: [],
}

export const gamesCardsListSlice: Slice = createSlice({
  name: "gamesCardsList",
  initialState,
  reducers: {
    setGamesCardsList(state, action: PayloadAction<Array<GameCardConfig>>) {
      state.gamesCardsList = action.payload
    },
    setVisibleGamesCardsList(
      state,
      action: PayloadAction<Array<GameCardConfig>>,
    ) {
      state.visibleGamesCardsList = action.payload
    },
  },
})

export const { setGamesCardsList, setVisibleGamesCardsList } =
  gamesCardsListSlice.actions
export default gamesCardsListSlice.reducer
