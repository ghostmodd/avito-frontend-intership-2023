import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"
import { filteringInitialState } from "./filteringInitialStateInterface"

const initialState: filteringInitialState = {
  isSortingShooter: false,
  isSortingStrategy: false,
  isSortingSports: false,
  isSortingMMORPG: false,

  isSortingPC: false,
  isSortingWeb: false,
}

export const filteringSlice: Slice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    enableIsFiltering: (state, action: PayloadAction) => {
      state[`isSorting${action.payload}`] = true
    },
    disableIsFiltering: (state, action: PayloadAction) => {
      state[`isSorting${action.payload}`] = false
    },
  },
})

export const { enableIsFiltering, disableIsFiltering } = filteringSlice.actions
export default filteringSlice.reducer
