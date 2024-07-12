import React from "react";
import Courses from "../courses/Courses";

const Home = () => {
  return (
    <div className="dark:text-white dark:bg-[#2f2f2f] ">
      <div className="bg-zinc-500 w-[400px] h-full">
        <Courses />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
