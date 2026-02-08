import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventsData : undefined,
  nightShows: undefined,
  currEvent : undefined,
  currCount : undefined
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setNightShows: (state, action) => {
      state.nightShows = action.payload;
    },
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
    setCurrEvent: (state, action) => {
      state.currEvent = action.payload;
    },
    setCurrCount: (state, action) => {
      state.currCount = action.payload;
    },
  },
});

export const { setNightShows, setEventsData, setCurrEvent, setCurrCount } = dataSlice.actions;
export default dataSlice.reducer;
