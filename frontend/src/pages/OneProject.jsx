import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";
import OneProjectCard from "../components/OneProjectCard";
import Background from "../components/Background";

function OneProject() {
  const [oneProject, setOneProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`projects/${id}`)
      .then((res) => {
        setOneProject(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <Background />
      <div className="flex w-full min-h-screen">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#1A1A1A] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold uppercase whitespace-nowrap">
            {oneProject.name}
          </h1>
        </div>
        <div className="flex justify-center bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-8">
          <OneProjectCard key={oneProject.id} oneProject={oneProject} />
        </div>
      </div>
    </>
  );
}

export default OneProject;
