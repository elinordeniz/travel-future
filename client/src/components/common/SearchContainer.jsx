
import Form from "./Form";
import Calender from "./Calender";
import DateRange from "./DateRange";
import {
  selectDateClick,
  selectIsOneWay,
  setIsOneWay,
} from "../../features/search/searchSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = ()=>{
    const dispatch = useDispatch();
    const dateClick = useSelector(selectDateClick);
    const isOneWay = useSelector(selectIsOneWay);
  

  return (
    <div className=" grid grid-col justify-center sm:min-w-[75%]  md:min-w-[95%] m-6 p-6 bg-white  shadow-2xl drop-shadow-lg rounded-md shadow-gray-light">
    <div className="flex w-[240px] mb-10 p-1 px-3 mt-4 justify-between bg-gray-light text-lg rounded-md">
      <button
        onClick={() => dispatch(setIsOneWay(true))}
        className={
          isOneWay
            ? "bg-white px-3 rounded-md "
            : "" + "text-gray-dark py-1 px-3"
        }
      >
        One Way
      </button>
      <button
        onClick={() => dispatch(setIsOneWay(false))}
        className={
          !isOneWay
            ? "bg-white px-3 rounded-md "
            : "" + "text-gray-dark py-1 px-3 "
        }
      >
        Round Trip
      </button>
    </div>
    <div className="relative flex justify-center max-w-[100%]">
      <Form />
      {dateClick && (
        <div className="absolute  md:top-20  bg-white">
          {!isOneWay ? <DateRange /> : <Calender />}
        </div>
      )}
    </div>
  </div>
  );
};

export default SearchContainer;
