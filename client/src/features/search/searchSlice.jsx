import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  dateClick: false,
  departDate: "",
  returnDate: "",
  fromAirport: "",
  toAirport: "",
  isOneWay: false,
  range: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  onewayDate: new Date(),
  isInBound: false
   
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDateClick: (state, action) => {
      state.dateClick = !state.dateClick;
    },
    setDepartDate: (state, action) => {
      state.departDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.returnDate = action.payload;
    },
    setFromAirport: (state, action) => {
      state.fromAirport = action.payload;
    },
    setToAirport: (state, action) => {
      state.toAirport = action.payload;
    },
    setIsOneWay: (state, action) => {
      state.isOneWay = action.payload;
    },
    setRange: (state, action) => {
      state.range = action.payload;
      let timeStart = new Date(state.range[0].startDate);
      let timeEnd = new Date(state.range[0].endDate);

      state.departDate = format(timeStart, "dd.MM.yyyy");
      state.returnDate = format(timeEnd, "dd.MM.yyyy");
    },
    setOnewayDate: (state, action) => {
      state.onewayDate = action.payload;
      let time = new Date(state.onewayDate);
      state.departDate = format(time, "dd.MM.yyyy");
    },
    setIsInBound : (state, action)=>{
      state.isInBound=action.payload
    }
  },
});

export const {
  setDateClick,
  setReturnDate,
  setDepartDate,
  setFromAirport,
  setToAirport,
  setIsOneWay,
  setRange,
  setOnewayDate,
  setIsInBound
} = searchSlice.actions;

export const selectDateClick = (state) => state.search.dateClick;
export const selectDepartDate = (state) => state.search.departDate;
export const selectReturnDate = (state) => state.search.returnDate;
export const selectFromAirport = (state) => state.search.fromAirport;
export const selectToAirport = (state) => state.search.toAirport;
export const selectIsOneWay = (state) => state.search.isOneWay;
export const selectRange = (state) => state.search.range;
export const selectOnewayDate = (state) => state.search.onewayDate;
export const selectIsInBound = (state) => state.search.isInBound;


export default searchSlice.reducer;
