import { MdOutlineFlightLand } from "react-icons/md";

const To = () => {
  return (
    <div className="w-full">
      <label
        className="mb-2 relative text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="to"
      >
        <MdOutlineFlightLand className="text-gray pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          placeholder="To"
          type="text"
          id="to"
          onChange={(a) => console.log(a)}
          className="border py-3 border-gray-light pl-12 w-full bg-grayish text-gray text-lg rounded-lg "
        />
      </label>
    </div>
  );
};

export default To;
