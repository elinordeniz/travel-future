import From from "../search/From";
import To from "../search/To";
import Date from "../search/Date";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDepartDate,
  selectReturnDate,
  selectIsOneWay,
  selectFromAirport,
  selectToAirport,
  setFromAirport,
  setToAirport,
} from "../../features/search/searchSlice";
import { useGetFlightsQuery } from "../../features/api/apiSlice";
import Airport from "../search/Airport";
import SearchButton from "./SearchButton";


const Form = () => {

  const dispatch = useDispatch();
  const departDate = useSelector(selectDepartDate);
  const returnDate = useSelector(selectReturnDate);
  const fromAirport=useSelector(selectFromAirport);
  const toAirport= useSelector(selectToAirport)
  const isOneWay = useSelector(selectIsOneWay);
  console.log(isOneWay);

  const {data, isLoading, isError, errror} =useGetFlightsQuery("results")

  return (
    <form action="" className="">
    <div
      className={`grid sm:grid-cols-1 ${
        isOneWay ? " md:grid-cols-4 " : " md:grid-cols-5 "
      } justify-center items-start gap-y-6 md:gap-x-4`}
    >
      <Airport
        id="from"
        placeholder="From"
        airportName="from_airportName"
        airportCode="from_airportCode"
        city="from_city"
      />
      <Airport
        id="to"
        placeholder="To"
        airportName="to_airportName"
        airportCode="to_airportCode"
        city="to_city"
      />
      <Date date={departDate} id="departDate" placeholder="Depart" />
      {!isOneWay && (
        <Date date={returnDate} id="returnDate" placeholder="Return" />
      )}

      <SearchButton/>
    </div>
  </form>
  )
}

export default Form