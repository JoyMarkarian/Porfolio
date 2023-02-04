import React from "react";

function BackToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button type="button" className="back-to-top" onClick={scrollToTop}>
      ↑
    </button>
  );
}

export default BackToTop;
