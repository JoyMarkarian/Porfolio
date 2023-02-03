/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import SkillCard from "./SkillCard";

function OneProjectCard({ oneProject }) {
  return (
    <div className="bg-[#FFFFFF] border-4 border-[#AA2020] rounded-lg shadow mx-2 my-8 text-center w-3/4">
      <h1 className="p-5 text-[#1A1A1A] text-2xl font-bold uppercase tracking-tight dark:text-white">
        {oneProject.description}
      </h1>
      <img
        className="object-cover rounded-t-lg w-full"
        src={`${import.meta.env.VITE_BACKEND_URL}/${oneProject.picture}`}
        alt={oneProject.name}
      />
      <div className="mb-6">
        <h2 className="pt-5 pb-2 text-[#1A1A1A] text-xl font-bold uppercase tracking-tight dark:text-white">
          Compétences
        </h2>
        {oneProject.skills &&
          oneProject.skills.map((skill) => {
            return <SkillCard key={skill.id} skill={skill} />;
          })}
      </div>
      <div className="mb-6">
        <a
          href={oneProject.githubLink}
          className="
          px-6
          py-2.5
          bg-[#AA2020]
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-[#9A1D1D] hover:shadow-lg
          focus:bg-[#9A1D1D] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#891A1A] active:shadow-lg
          transition
          duration-150
          ease-in-out"
        >
          Lien GitHub
        </a>
      </div>
    </div>
  );
}

export default OneProjectCard;
