/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import User from "../context/User";
import Background from "../components/Background";
import editMeta from "../services/seo";
import apiConnexion from "../services/apiConnexion";

function Home() {
  editMeta(
    "Connexion",
    "Découvrez mon portfolio en tant que développeur web, mettant en avant mes compétences en développement front-end et back-end ainsi que mes projets récents. Contactez-moi pour tout renseignement."
  );
  const [connexion, setConnexion] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const userContext = useContext(User.UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setMessage("");
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (
      emailPattern.test(connexion.email) &&
      pwdPattern.test(connexion.password)
    ) {
      apiConnexion
        .post("/login", { ...connexion })
        .then((res) => {
          navigate("/admin");
          userContext.handleUser(res.data);
        })
        .catch((err) => {
          setMessage(err.response.data);
        });
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <>
      <Background />
      <div className="flex min-h-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            CONNEXION
          </h1>
        </div>
        <div
          id="about"
          className="bg-[#1A1A1A] dark:bg-[#121212] w-5/6 flex justify-center py-5 sm:py-10"
        >
          <div className="flex justify-center ml-8 mr-3 rounded-xl border-4 border-[#AA2020] px-6 py-10 sm:px-20">
            <form>
              <div className="group">
                <input
                  className="mb-5 pl-3 border-2 border-[#e7ebec] w-60 rounded-lg outline-[#ced7da] text-lg"
                  id="email-address"
                  name="email"
                  type="email"
                  value={connexion.email}
                  onChange={(e) =>
                    setConnexion({ ...connexion, email: e.target.value })
                  }
                  autoComplete="email"
                  required
                  placeholder="Adresse email"
                />
              </div>
              <div className="group flex flex-row">
                <input
                  className="mb-6 pl-3 border-2 border-[#e7ebec] w-60 rounded-lg outline-[#ced7da] text-lg"
                  id="password"
                  name="password"
                  type="password"
                  value={connexion.password}
                  onChange={(e) =>
                    setConnexion({ ...connexion, password: e.target.value })
                  }
                  autoComplete="current-password"
                  required
                  placeholder="Mot de passe"
                />
              </div>
              <p className="text-white mb-6">{message}</p>
              <div className="group flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6
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
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
