import React from "react";
import useGetHeight from "../../hooks/useGetHeight";
import SearchContainer from "./SearchContainer";


const Hero = () => {
  console.log(window.innerHeight);
  const height = useGetHeight();
  console.log(height);

  const heroHeight = `h-[${height}px]`;


  let classs = ` min-w-[270px] w-screen h-screen mx-auto dark:bg-slate-600 dark:text-slate-100 scroll-mt-20  ${heroHeight}`;
  return (
    <main id="hero" className={classs}>
      <section className=" flex w-full h-full  bg-hero  bg-cover bg-top  items-center justify-center overflow-auto ">
    <SearchContainer />
      </section>
    </main>
  );
};

export default Hero;
