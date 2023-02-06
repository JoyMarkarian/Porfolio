import React from "react";
import { Link } from "react-router-dom";

import Background from "../components/Background";

function Home() {
  return (
    <>
      <Background />
      <div className="flex">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            ERREUR 404
          </h1>
        </div>

        <div className="bg-indigo-900 relative overflow-hidden h-screen w-5/6 flex justify-center">
          <img
            src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
            className="absolute h-full w-full object-cover"
            alt="error"
          />
          <div className="inset-0 bg-black opacity-25 absolute" />

          <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full flex flex-col items-center relative z-10">
              <h1 className="font-extrabold text-[#6A5C92] text-5xl text-center text-white leading-tight mt-4">
                Vous êtes tout seul ici !
              </h1>

              <p className="font-extrabold text-[#6A5C92] text-8xl my-44 text-white animate-bounce">
                404
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="
        px-6
        py-2.5
        mt-8
        bg-[#54A7BF]
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-[#6A5C92] hover:shadow-lg
        focus:bg-[#6A5C92] focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-[#6A5C92] active:shadow-lg
        transition
        duration-150
        ease-in-out"
                  onClick={(e) => handleSubmit(e)}
                >
                  RETOUR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
