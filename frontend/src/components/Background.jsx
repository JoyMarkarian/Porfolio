import React from "react";

function Background() {
  return (
    <div className="flex">
      <div className="bg-[#1A1A1A] dark:bg-[#121212] flex justify-center items-center w-1/6 py-20 sm:py-24">
        <h1 className="-rotate-90 text-[#FFFFFF] text-2xl sm:text-4xl font-extrabold text-center">
          DÉVELOPPEUR WEB
        </h1>
      </div>
      <div className="bg-[#FFFFFF] dark:bg-[#1A1A1A] flex justify-center items-center w-5/6 ">
        <h1 className="text-[#1A1A1A] dark:text-[#FFFFFF] text-4xl sm:text-7xl font-extrabold text-center">
          JOY MARKARIAN
        </h1>
      </div>
    </div>
  );
}

export default Background;
