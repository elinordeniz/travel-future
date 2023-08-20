import { DateRange } from "react-date-range";
import { selectRange, setRange } from "../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
 import useGetWidth from '../../hooks/useGetWidth'

const Calender = () => {
  const dispatch = useDispatch();
  const range = useSelector(selectRange);
  const width=useGetWidth();

  return (
    <DateRange
      onChange={(item) => dispatch(setRange([item.selection]))}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      months={width<768 ? 1 : 2}
      ranges={range}
      direction="horizontal"
      rangeColors={["#005eb8"]}
      // className='flex items-center justify-center w-full'
    />
  );
};

export default Calender;
