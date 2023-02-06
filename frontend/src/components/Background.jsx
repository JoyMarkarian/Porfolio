import React from "react";

function Background() {
  return (
    <div className="flex">
      <div className="bg-cover flex justify-center items-center w-1/6 py-20 sm:py-24 dark:border-4 border-[#121212]">
        <h1 className="-rotate-90 text-[#FFFFFF] text-2xl sm:text-4xl font-extrabold text-center">
          DÉVELOPPEUR WEB
        </h1>
      </div>
      <div className="flex dark:bg-[#313131] dark:text-[#FFFFFF] justify-center items-center w-5/6 ">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-center">
          JOY MARKARIAN
        </h1>
      </div>
    </div>
  );
}

export default Background;
