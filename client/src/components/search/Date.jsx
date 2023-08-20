import { SlCalender } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setDateClick } from "../../features/search/searchSlice";
import {
  selectReturnDateError,
  selectDepartDateError,
} from "../../features/errors/errorSlice";

const Date = ({ date, id, placeholder }) => {
  const dispatch = useDispatch();
  const returnDateError = useSelector(selectReturnDateError);
  const departDateError = useSelector(selectDepartDateError);

  return (
    <div className="w-full" onClick={() => dispatch(setDateClick())}>
      <label
        className="mb-2 relative text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={id}
      >
        <SlCalender className="text-gray pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          placeholder={placeholder}
          type="text"
          id={id}
          value={date}
          readOnly
          className="border py-3 border-gray-light pl-12 w-full bg-grayish text-gray text-lg rounded-lg "
        />
      </label>
      {departDateError.isError && id === "departDate" && (
        <div className="text-red pl-2 pt-1 font-extralight">
          {departDateError.msg}
        </div>
      )}
      {returnDateError.isError && id === "returnDate" && (
        <div className="text-red pl-2 pt-1 font-extralight">
          {returnDateError.msg}
        </div>
      )}
    </div>
  );
};

export default Date;
