/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import GitHub from "../assets/github2.svg";
import Linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div className="flex">
      <div className="bg-cover flex justify-center bg-[#1A1A1A] dark:bg-[#121212] w-1/5 ">
        <a
          href="https://github.com/JoyMarkarian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="GitHub" className="my-2 sm:m-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/joymarkarian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="GitHub" className="my-2 sm:m-2" />
        </a>
      </div>
      <div className="flex justify-center dark:bg-[#313131] w-4/5 w-full py-6 text-l">
        <Link to="/login">
          <p className="dark:text-white ">
            Joy MARKARIAN © Tous droits réservés
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
