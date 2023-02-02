/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import apiConnexion from "../services/apiConnexion";
import SkillCard from "./SkillCard";

function Technologies({ type, title }) {
  const [skills, setSkills] = useState();

  useEffect(() => {
    apiConnexion
      .get(`/skills/?type=${type}`)
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-[#1A1A1A] dark:bg-[#121212] w-full flex justify-center">
      <div className="bg-[#FFFFFF] w-4/5 rounded-xl border-4 border-[#AA2020] my-6 sm:mb-12">
        <p className="text-[#1A1A1A] font-bold text-3xl sm:px-40 pt-8 pb-4 text-center">
          {title}
        </p>
        <hr />
        <div className="flex flex-wrap sm:flex justify-evenly pb-3">
          {skills &&
            skills.map((skill) => {
              return <SkillCard key={skill.id} skill={skill} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
