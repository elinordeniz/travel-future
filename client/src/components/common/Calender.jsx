import { Calendar } from "react-date-range";
import {
  selectOnewayDate,
  setOnewayDate,
} from "../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const Calender = () => {
  const dispatch = useDispatch();
  const onewayDate = useSelector(selectOnewayDate);

  return (
    <Calendar
      onChange={(item) => dispatch(setOnewayDate(item))}
      date={onewayDate}
    />
  );
};

export default Calender;
