import Flight from "./Flight";
import { useNavigate } from "react-router-dom";
const Flights = ({ isLoading, List, isInbound, isOneWay, isError }) => {
  const navigate= useNavigate()
  // if (isOneWay) {
  //   console.log(isLoading[0]);
  //   console.log(List[0]);
  // } else {
  //   console.log(isLoading[0]), isLoading[1];

  //   console.log(List[0], List[1]);
  // }
  return (
    <section className="w-[90px]">
      {isOneWay && isLoading[0] && <p>Loading...</p>}
      {!isOneWay && isLoading[1] && <p>Loading...</p>}
      {isError[1] || isError[0] && <p>Error</p>}
      {List[1]?.length===0 && List[0]?.length===0 && <p>No available flights</p> } 
      {isOneWay && !isLoading[0] && List[0]?.lenght>=1 && List[0]?.map((flight, key)=>(
        <Flight key={key} flight={flight} />
      ))}
    </section>
  );
};

export default Flights;
