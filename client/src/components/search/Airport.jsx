import { MdOutlineFlightTakeoff } from "react-icons/md";
import { useGetFlightsQuery } from "../../features/api/apiSlice";
import { useState, useMemo, useRef, useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFromError,
  selectToError,
} from "../../features/errors/errorSlice";
import {
  selectFromAirport,
  setFromAirport,
  setToAirport,
} from "../../features/search/searchSlice";

const Airport = ({ id, placeholder, airportName, airportCode, city }) => {
  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const ref=useRef()

  const fromError = useSelector(selectFromError);
  const toError = useSelector(selectToError);

  const dispatch = useDispatch();


  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  useEffect(()=>{

  })

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setIsClicked(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if( ref.current && !ref.current.contains(e.target) ) {
      setIsClicked(false)
    }
  }


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
    id,
    {
      selectFromResult: (result, isLoading, isError, error, isSuccess) => ({
        ...result,
        filteredResults: searchFiltered(result, search),
      }),
    }
  );
useEffect(()=>{
    if(filteredResults?.length===0 && !isLoading){
        setIsClicked(false)
      }
}, [search])
  const setFromFiltered = (selected) => {
    filteredResults?.length!==0 && setIsClicked(true);
     
    setSearch(selected);
    if (id === "from") {
    setIsClicked(false);

      dispatch(setFromAirport(selected));
    } else if (id === "to") {
    setIsClicked(false);

      dispatch(setToAirport(selected));
    }
  };

  return (
    <div className="min-w-24 relative" ref={ref}>
      <label
        className="mb-2 relative text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="from"
      >
        <MdOutlineFlightTakeoff className="text-gray pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          placeholder={placeholder}
          autoComplete="off"
          aria-autocomplete="off"
          type="text"
          id={id}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onClick={() => setIsClicked(!isClicked)}
          className="border py-3 pl-12 pr-2 w-full bg-grayish border-gray-light text-gray-dark text-lg rounded-lg"
        />
      </label>
      {fromError.isError && id === "from" && (
        <div className="text-red pl-2 pt-1 font-extralight">
          {fromError.msg}
        </div>
      )}
      {toError.isError && id === "to" && (
        <div className="text-red pl-2 pt-1 font-extralight">{toError.msg}</div>
      )}
      {search && !isLoading && isClicked && (
        <div className="absolute sm:justify-center md:justify-normal bg-white w-[350px] top-16 self-center z-20">
          <ul className="p-4 text-lg">
            {filteredResults
              .filter((from, length) => length < 8)
              .map((from, key) => (
                <li
                  key={key}
                  className="py-3 px-2 hover:bg-indigo hover:text-white"
                  onClick={() => setFromFiltered(from[airportName])}
                >
                  <span className=" tracking-wider font-bold">
                    {from[airportCode]}{" "}
                  </span>{" "}
                  - <span>{from[airportName]}</span>{" "}
                  <span className="italic font-extralight text-md">
                    , {from[city]}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Airport;
