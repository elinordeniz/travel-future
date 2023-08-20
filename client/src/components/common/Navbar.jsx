import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { BiWorld, BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="sticky top-0 h-18 bg-indigo text-white z-10 ">
      <section className="flex flex-row p-4 max-w-5xl mx-auto justify-between items-center text-white ">
        <div>
       
           <Link to={"/"}> <SiYourtraveldottv className="w-[40px] h-[40px] text-white" /></Link>
          
        </div>

        <ul className="flex items-center space-x-10 m-0 text-white upper tracking-wider text-lg self-center ">
          <li> 
            Help
          </li>
          <li>
          Cheapest Flights
          </li>
          <li>
            <button className="flex gap-x-2 p-1 px-4 rounded-md bg-white text-indigo items-center ">
              <BiSolidUserCircle className="w-[25px] h-[25px]" /> Sign in
            </button>
          </li>
          <li>
            <BiWorld className="w-[30px] h-[30px] text-white" />
          </li>
        </ul>
    
      </section>
    </header>
  );
};

export default Navbar;
