import { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";
import ProjectCard from "../components/ProjectCard";
import Background from "../components/Background";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    apiConnexion
      .get(`projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#1A1A1A] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            PROJETS
          </h1>
        </div>
        <div className="flex flex-wrap sm:flex justify-evenly bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-8 flex">
          {projects &&
            projects.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Projects;
