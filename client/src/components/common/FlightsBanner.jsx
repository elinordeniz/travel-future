
import React, {useMemo} from 'react'
import { useGetFlightsQuery } from '../../features/api/apiSlice'
import { createSelector } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import {
  selectDepartDate,
  selectReturnDate,
  selectIsOneWay,
  selectFromAirport,
  selectToAirport,
  setFromAirport,
  setToAirport,
  selectIsInBound
} from "../../features/search/searchSlice";

const FlightsBanner = () => {
    const departDate = useSelector(selectDepartDate);
    const returnDate = useSelector(selectReturnDate);
    const fromAirport=useSelector(selectFromAirport);
    const toAirport= useSelector(selectToAirport)
    const isOneWay = useSelector(selectIsOneWay);
    const isInBound = useSelector(selectIsInBound);

  return (
    <div className='min-w-[90%] h-[200px] bg-white shadow-sm drop-shadow-sm p-6 m-6'>
        <div className='flex flex-col'>
        <div className='w-[100px] h-[50px] m-2 mb-2 bg-red capitalize text-white flex items-center justify-center rounded-sm font-semibold tracking-widest text-md '> {isOneWay ? "ONE WAY" : isInBound ? "INBOUND" : "OUTBOUND" } </div>
        <div className='text-2xl m-2 font-lighter tracking-wide'>{`${fromAirport} to ${toAirport}`}</div>
        <div className='font-semibold text-lg m-2 '> {`${departDate} ${returnDate}`}</div>
        </div>
    </div>
   
  )
}

export default FlightsBanner