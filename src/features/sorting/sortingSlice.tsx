import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

interface sortingInitialState {
  isSortingGenre: boolean,
  isSortingShooter: boolean,
  isSortingStrategy: boolean,
  isSortingSports: boolean,
  isSortingMMORPG: boolean,

  isSortingPlatform: boolean,
  isSortingPC: boolean,
  isSortingWeb: boolean,
}

const initialState: sortingInitialState = {
  isSortingGenre: false,
  isSortingShooter: false,
  isSortingStrategy: false,
  isSortingSports: false,
  isSortingMMORPG: false,

  isSortingPlatform: false,
  isSortingPC: false,
  isSortingWeb: false,
};


function checkQueries (state: sortingInitialState) {
  state.isSortingGenre = (state.isSortingShooter || state.isSortingStrategy || state.isSortingSports || state.isSortingMMORPG);
  state.isSortingPlatform = (state.isSortingPC || state.isSortingWeb);
}

export const sortingSlice: Slice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
      enableIsSorting: (state, action: PayloadAction) => {
        state[`isSorting${action.payload}`] = true;
        checkQueries(state);
      },
      disableIsSorting: (state, action: PayloadAction) => {
        state[`isSorting${action.payload}`] = false;
        checkQueries(state);
      },
    }
  })
;

export const {enableIsSorting, disableIsSorting} = sortingSlice.actions;
export default sortingSlice.reducer;
