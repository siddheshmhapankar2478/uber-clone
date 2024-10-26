import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: null,
  destination: null,
  travelInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

export const { setSource, setDestination, setTravelInformation } =
  navSlice.actions;

//Selectors
export const selectSource = (state) => state.nav.source;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelInformation = (state) => state.nav.travelInformation;

export default navSlice.reducer;
