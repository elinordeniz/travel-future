import { MdOutlineFlightTakeoff } from "react-icons/md";
import { useGetFlightsQuery } from "../../features/api/apiSlice";
import { useState, useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFromAirport,
  setFromAirport,
} from "../../features/search/searchSlice";

const From = () => {
  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const fromAirport = useSelector(selectFromAirport);
  const dispatch = useDispatch();

  const searchFiltered = useMemo(() => {
    let emptyArray = [...search];
    return createSelector(
      (res) => res?.data,
      (res, search) => search?.toLocaleLowerCase(),
      (data, search) => {
        const filtered = data?.filter((flight) =>
          flight.fromAirportSearchName.toLocaleLowerCase().includes(search)
        );

        return filtered ?? emptyArray;
      }
    );
  }, [search]);

  const { filteredResults, isLoading, isError, error } = useGetFlightsQuery(
    "From",
    {
      selectFromResult: (result, isLoading, isError, error, isSuccess) => ({
        ...result,
        filteredResults: searchFiltered(result, search),
      }),
    }
  );

  const setFromFiltered = (selected) => {
    setSearch(selected);
    dispatch(setFromAirport(selected));
    setIsClicked(() => !isClicked);
  };
  let uniqueAirportsList = [...new Set(filteredResults)];
  return (
    <div className="min-w-24 relative">
      <label
        className="mb-2 relative text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="from"
      >
        <MdOutlineFlightTakeoff className="text-gray pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          placeholder="From"
          type="text"
          id="from"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onClick={() => setIsClicked(!isClicked)}
          className="border py-3 pl-12 pr-2 w-full bg-grayish border-gray-light text-gray-dark text-lg rounded-lg"
        />
      </label>
      {search && !isLoading && isClicked && (
        <div className="absolute bg-white w-[350px] top-16 self-center">
          <ul className="p-4 text-lg">
            {uniqueAirportsList
              .filter((from, length) => length < 8)
              .map((from, key) => (
                <li
                  key={key}
                  className="py-3 px-2 hover:bg-indigo hover:text-white"
                  onClick={() => setFromFiltered(from.from_airportName)}
                >
                  <span className=" tracking-wider font-bold">
                    {from.from_airportCode}{" "}
                  </span>{" "}
                  - <span>{from.from_airportName}</span>{" "}
                  <span className="italic font-extralight text-md">
                    , {from.from_city}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default From;
