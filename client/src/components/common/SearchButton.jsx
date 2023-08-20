import {useEffect} from "react";
import {
  selectDepartDate,
  selectReturnDate,
  selectIsOneWay,
  selectFromAirport,
  selectToAirport,
} from "../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setFromError, setToError, setDepartDateError, setReturnDateError} from '../../features/errors/errorSlice'

const SearchButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departDate = useSelector(selectDepartDate);
  const returnDate = useSelector(selectReturnDate);
  const fromAirport = useSelector(selectFromAirport);
  const toAirport = useSelector(selectToAirport);
  const isOneWay = useSelector(selectIsOneWay);

  

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departDate) {
        dispatch(setDepartDateError(true))
    }else{
        dispatch(setDepartDateError(false))

    }
    if (!isOneWay && !returnDate) {
        dispatch(setReturnDateError(true))
    }else{
        dispatch(setReturnDateError(false))
    }
    if (!fromAirport) {
        dispatch(setFromError(true))
    }else{
        dispatch(setFromError(false))

    }
    if (!toAirport) {
        dispatch(setToError(true))
    }else{
        dispatch(setToError(false))

    }
    if (
      !toAirport ||
      !fromAirport ||
      (!isOneWay && !returnDate) ||
      !departDate
    ) {
      return;
    } else {
      navigate("/flights");
    }
  };
  return (
    <div className="w-full">
      <button
        onClick={handleSubmit}
        className="text-lg w-full py-3 px-4 bg-indigo text-white rounded-md"
      >
        Search Flights
      </button>
    </div>
  );
};

export default SearchButton;
