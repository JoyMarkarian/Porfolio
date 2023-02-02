/* eslint-disable react/prop-types */
import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="pt-6 sm:pt-8 inline-block text-center place-content-center px-2">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/${skill.picture}`}
        alt={skill.name}
        className="pb-1"
      />
      <p className="text-l hidden sm:block">{skill.name}</p>
    </div>
  );
}

export default SkillCard;
