import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex">
      <div className="bg-[#1A1A1A] dark:bg-[#121212] w-1/5" />
      <div className="flex justify-center dark:bg-[#1A1A1A] w-4/5 w-full dark:bg-[#1A1A1A] py-6 text-l">
        <p className="dark:text-white ">
          <Link to="/admin">Joy MARKARIAN</Link> © Tous droits réservés
        </p>
      </div>
    </div>
  );
}

export default Footer;
