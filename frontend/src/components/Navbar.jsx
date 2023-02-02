import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <>
      <div className="hidden sm:flex">
        <div className="flex justify-center dark:bg-[#1A1A1A] w-1/5" />
        <div className="flex w-full justify-end bg-[#121212] w-4/5 py-6 text-xl font-semibold">
          <div className="text-[#FFFFFF] mr-16">
            <Link to="/">
              <p>À PROPOS</p>
            </Link>
          </div>
          <div className="text-[#FFFFFF] mr-16">
            <Link to="/career">
              <p>PARCOURS</p>
            </Link>
          </div>
          <div className="text-[#FFFFFF] mr-16">
            <Link to="/skills">
              <p>COMPÉTENCES</p>
            </Link>
          </div>
          <div className="text-[#FFFFFF] mr-16">PROJETS</div>
          <div className="text-[#FFFFFF] mr-16">
            <Link to="/contact">
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex">
        <div className="bg-[#FFFFFF] w-1/6">
          <button
            className="p-4 space-y-2"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <span
              className={`${
                isOpen ? "hidden" : "block"
              } block w-8 h-1 bg-[#121212] rounded-md`}
            />
            <span
              className={`${
                isOpen ? "hidden" : "block"
              } block w-8 h-1 bg-[#121212] rounded-md`}
            />
            <span
              className={`${
                isOpen ? "hidden" : "block"
              } block w-8 h-1 bg-[#121212] rounded-md`}
            />
          </button>
        </div>
        <div className="bg-[#121212] w-5/6" />
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full z-40 bg-white`}
        >
          <div className="relative w-full bg-[#121212]">
            <button
              className="absolute right-0 mr-4 mt-4 text-[#FFFFFF] text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
            <div className="p-10 flex flex-col">
              <div className="text-[#FFFFFF] text-2xl font-bold py-2">
                <Link to="/">À PROPOS</Link>
              </div>
              <div className="text-[#FFFFFF] text-2xl font-bold py-2">
                <Link to="/career">PARCOURS</Link>
              </div>
              <div className="text-[#FFFFFF] text-2xl font-bold py-2">
                <Link to="/skills">COMPÉTENCES</Link>
              </div>
              <div className="text-[#FFFFFF] text-2xl font-bold py-2">
                <Link to="/projects">PROJETS</Link>
              </div>
              <div className="text-[#FFFFFF] text-2xl font-bold py-2">
                <Link to="/contact">CONTACT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
