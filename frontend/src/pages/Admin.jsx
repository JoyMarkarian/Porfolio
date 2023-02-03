import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";
import ProjectCardAdmin from "../components/ProjectCardAdmin";
import Background from "../components/Background";

function Admin() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    apiConnexion
      .get(`projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteProject = (project) => {
    const newProject = [...projects];
    newProject.splice(projects.indexOf(project), 1);
    setProjects(newProject);
  };

  const handleDeleteProject = (project) => {
    apiConnexion
      .delete(`projects/${project.id}`)
      .then(() => {
        deleteProject(project);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#1A1A1A] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            PROJETS
          </h1>
        </div>
        <div className="w-5/6 bg-[#1A1A1A] dark:bg-[#121212]">
          <Link to="/admin/projects/add">
            <button
              type="button"
              className="
        px-6
        py-2.5
        m-4
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
              Créer un nouveau projet
            </button>
          </Link>
          <div className="flex flex-wrap sm:flex justify-evenly pb-8 ">
            {projects &&
              projects.map((project) => {
                return (
                  <ProjectCardAdmin
                    key={project.id}
                    project={project}
                    handleDeleteProject={handleDeleteProject}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
