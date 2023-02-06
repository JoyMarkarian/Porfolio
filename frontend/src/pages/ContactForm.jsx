import React, { useState } from "react";
import axios from "axios";
import Background from "../components/Background";
import editMeta from "../services/seo";

function ContactForm() {
  editMeta(
    "Contact",
    "Découvrez mon portfolio en tant que développeur web, mettant en avant mes compétences en développement front-end et back-end ainsi que mes projets récents. Contactez-moi pour tout renseignement."
  );

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [send, setSend] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5004/sendEmail", data)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
    setSend(true);
  };

  return send === false ? (
    <div>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            CONTACT
          </h1>
        </div>
        <div
          id="form"
          className="container bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-8 sm:py-16"
        >
          <section className="text-center text-white">
            <div className="w-4/5 mx-auto px-3 lg:px-6 rounded-xl border-4 border-[#AA2020]">
              <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-12">
                Contactez-moi
              </h2>
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
          w-full
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
                    placeholder="Nom"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
          w-full
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
                    placeholder="Adresse mail"
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
          form-control
          block
          w-full
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
          focus:text-gray-700 focus:bg-white focus:[#AA2020] focus:outline-none
        "
                    id="exampleFormControlTextarea13"
                    rows="6"
                    placeholder="Message"
                    name="message"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <button
                  type="button"
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
                  onClick={(e) => handleSubmit(e)}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            CONTACT
          </h1>
        </div>
        <div
          className="merci bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-32"
          id="form"
        >
          <p className="text-center text-white text-xl my-2">
            Merci pour l'envoi de votre message !
          </p>
          <p className="text-center text-white text-xl my-2">
            Une réponse vous sera apportée dans les plus brefs délais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
