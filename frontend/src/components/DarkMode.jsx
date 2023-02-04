import React, { useState } from "react";

import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

import "../App.css";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="flex justify-center items-center ">
      <img className="aspect-auto" src={Sun} alt="light" />
      <div>
        <label className="switch mx-2">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round" />
        </label>
      </div>
      <img className="aspect-auto" src={Moon} alt="dark" />
    </div>
  );
}

export default DarkMode;
