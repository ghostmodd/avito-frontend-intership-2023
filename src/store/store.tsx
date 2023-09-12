import { configureStore } from "@reduxjs/toolkit"
import filteringSlice from "../features/filtering/filteringSlice"
import gamesCardsListSlice from "../features/gamesCardsListSlice/gamesCardsListSlice"

export const store = configureStore({
  reducer: {
    games: gamesCardsListSlice,
    filtering: filteringSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
