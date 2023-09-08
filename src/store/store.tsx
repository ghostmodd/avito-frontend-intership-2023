import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from "../features/sorting/sortingSlice";
import visibleGamesCardsListSlice from "../features/visibleGamesCardList/visibleGamesCardList";

export const store = configureStore({
  reducer: {
    visibleGamesCardsList: visibleGamesCardsListSlice,
    sorting: sortingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
