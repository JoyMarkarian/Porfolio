import Background from "../components/Background";
import Technologies from "../components/Technologies";
import editMeta from "../services/seo";

function Skills() {
  editMeta(
    "Mes compétences",
    "Découvrez mon portfolio en tant que développeur web, mettant en avant mes compétences en développement front-end et back-end ainsi que mes projets récents. Contactez-moi pour tout renseignement."
  );
  return (
    <>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#1A1A1A] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            COMPÉTENCES
          </h1>
        </div>
        <div className="bg-[#1A1A1A] dark:bg-[#121212] w-5/6 py-8 sm:py-16">
          <Technologies title="TECHNOLOGIES" type={1} />
          <Technologies title="AUTRES" type={2} />
        </div>
      </div>
    </>
  );
}

export default Skills;
