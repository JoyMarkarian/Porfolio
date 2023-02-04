import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";
import Background from "../components/Background";

function UpdateProject() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const navigate = useNavigate();

  const getProject = () => {
    apiConnexion
      .get(`/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/admin");
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleProject = (name, value) => {
    const newProject = { ...project };
    newProject[name] = value;
    setProject(newProject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiConnexion
      .put(`/projects/${id}`, {
        name: project.name,
        description: project.description,
        picture: project.picture,
        githubLink: project.githubLink,
      })
      .then(() => {
        navigate("/admin");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="whitespace-nowrap -rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            MODIFICATION DU PROJET
          </h1>
        </div>
        <div className="bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-8 sm:py-16 text-center text-white w-5/6">
          <div className="w-4/5 mx-auto px-3 lg:px-6 rounded-xl border-4 border-[#AA2020] ">
            <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-12">
              Modifier le projet
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group mb-6 flex justify-center">
                <input
                  type="text"
                  className="form-control block
                  w-2/3
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#AA2020] border-2
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#AA2020] focus:outline-none"
                  id="exampleInput7"
                  placeholder="Nom du projet"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleProject(e.target.name, e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6 flex justify-center">
                <textarea
                  type="text"
                  className="form-control block
                  w-2/3 
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#AA2020] border-2
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#AA2020] focus:outline-none"
                  id="exampleInput8"
                  placeholder="Description du projet"
                  name="project_description"
                  required
                  value={project.description}
                  onChange={(e) => handleProject(e.target.name, e.target.value)}
                />
              </div>
              <div className="form-group mb-6 flex justify-center">
                <input
                  type="text"
                  className="form-control block
                  w-2/3 
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#AA2020] border-2
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#AA2020] focus:outline-none"
                  id="exampleInput8"
                  placeholder="Photo du projet"
                  name="project_picture"
                  value={project.picture}
                  onChange={(e) => handleProject(e.target.name, e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-6 flex justify-center">
                <input
                  type="text"
                  className="form-control block
                  w-2/3 
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-[#AA2020] border-2
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-[#AA2020] focus:outline-none"
                  id="exampleInput8"
                  placeholder="Lien GitHub"
                  name="project_githubLink"
                  value={project.githubLink}
                  onChange={(e) => handleProject(e.target.name, e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="
                px-6
                py-2.5
                mb-5
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
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProject;
