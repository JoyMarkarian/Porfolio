/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="max-w-sm bg-[#FFFFFF] border-4 border-[#AA2020] rounded-lg shadow w-3/4 sm:w-1/2 mx-2 my-8 text-center">
      <img
        className="object-cover rounded-t-lg h-60 w-full"
        src={`${import.meta.env.VITE_BACKEND_URL}/${project.picture}`}
        alt={project.name}
      />
      <div>
        <h5 className="p-5 text-[#1A1A1A] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
      </div>
      <Link to={`projects/${project.id}`}>
        <button
          type="button"
          className="
        px-4
        py-2.5
        mb-4
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
          En savoir plus
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;
