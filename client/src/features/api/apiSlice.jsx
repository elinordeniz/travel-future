import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "flightApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2323",
  }),
  tagTypes: ["Flights"],
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: () => "/flights",
      keepUnusedDataFor: 30000,
      transformResponse: (response) => {
         console.log(response)
        // this transformation is for the filtering departure/destination airports by name/city/airport code
        const finalList = response.data.map((flight) => {
          let fromAirport = flight.from_airportName;
          let toAirport = flight.to_airportName;
          flight.fromAirportSearchName = `${
            flight.from_airportCode
          } - ${fromAirport.slice(0, -8)}, ${flight.from_city}`;
          flight.toAirportSearchName = `${
            flight.to_airportCode
          } - ${toAirport.slice(0, -8)}, ${flight.to_city}`;

          return flight;
        });
   
        return finalList;
      },
      providesTags: ["Flights"],
    }),
  }),
});
export const { useGetFlightsQuery } = apiSlice;
