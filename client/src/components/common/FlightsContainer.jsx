
import SearchContainer from "./SearchContainer";
import Flights from "./Flights";
import Navbar from "./Navbar";
import { useGetFlightsQuery } from "../../features/api/apiSlice";
import FlightsBanner from "./FlightsBanner";
import React, { useMemo } from "react";

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
  selectIsInBound,
} from "../../features/search/searchSlice";

const FlightsContainer = () => {
  const dispatch = useDispatch();
  const departDate = useSelector(selectDepartDate);
  const returnDate = useSelector(selectReturnDate);
  const fromAirport = useSelector(selectFromAirport);
  const toAirport = useSelector(selectToAirport);
  const isOneWay = useSelector(selectIsOneWay);
  const isInbound = useSelector(selectIsInBound);

  const outBoundSearchResults = useMemo(() => {
    let emptyArray = [];
    return createSelector(
      (res) => res?.data,
      (data) => {
        const filtered = data?.filter(
          (flight) =>
            flight?.from_airportName
              ?.toLocaleLowerCase()
              ?.includes(fromAirport.toLocaleLowerCase()) &&
            flight?.to_airportName
              ?.toLocaleLowerCase()
              ?.includes(toAirport.toLocaleLowerCase()) &&
            flight?.flight_date
              ?.toLocaleLowerCase()
              ?.includes(departDate.toLocaleLowerCase())
        );
        console.log(filtered);
        return filtered ?? emptyArray;
      }
    );
  }, [fromAirport, toAirport, departDate]);

  const inBoundSearchResults = useMemo(() => {
    let emptyArray = [];
    return createSelector(
      (res) => res?.data,
      (data) => {
        const filtered = data?.filter(
          (flight) =>
            flight?.from_airportName
              ?.toLocaleLowerCase()
              ?.includes(toAirport.toLocaleLowerCase()) &&
            flight?.to_airportName
              ?.toLocaleLowerCase()
              ?.includes(fromAirport.toLocaleLowerCase()) &&
            flight?.flight_date
              ?.toLocaleLowerCase()
              ?.includes(returnDate.toLocaleLowerCase())
        );
        console.log(filtered);
        return filtered ?? emptyArray;
      }
    );
  }, [fromAirport, toAirport,returnDate]);

  const { outBoundResults, isLoading, isError, error } = useGetFlightsQuery(
    "From",
    {
      selectFromResult: (result, isLoading, isError, error, isSuccess) => ({
        ...result,
        outBoundResults: outBoundSearchResults(result),
      }),
    }
  );

  const {
    inBoundResults,
    isLoading: inIsLoading,
    isError: inIsError,
    error: inError,
  } = useGetFlightsQuery("From", {
    selectFromResult: (result, isLoading, isError, error, isSuccess) => ({
      ...result,
      inBoundResults: inBoundSearchResults(result),
    }),
  });
 if( !inBoundResults || !outBoundResults && !isLoading && !inIsLoading) return <p>Error, try again</p>;

  return (
    <main className="flex flex-col justify-center items-center">
      <FlightsBanner />
      <Flights
        isInbound={isInbound}
        isOneWay={isOneWay}
        List={[...outBoundResults, ...inBoundResults]}
        isLoading={[isLoading, inIsLoading]}
        isError={[isError, inIsError]}
       
      />
    </main>
  );
};

export default FlightsContainer;
