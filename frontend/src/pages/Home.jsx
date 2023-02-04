import React from "react";
import Background from "../components/Background";
import editMeta from "../services/seo";

function Home() {
  editMeta(
    "À propos",
    "Découvrez mon portfolio en tant que développeur web, mettant en avant mes compétences en développement front-end et back-end ainsi que mes projets récents. Contactez-moi pour tout renseignement."
  );

  return (
    <>
      <Background />
      <div className="flex">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#313131] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            À PROPOS
          </h1>
        </div>
        <div
          id="about"
          className="bg-[#1A1A1A] dark:bg-[#121212] w-5/6 flex justify-center py-5 sm:py-20"
        >
          <p className="text-[#FFFFFF] text-l px-5 sm:px-20 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vestibulum, diam nec mattis sollicitudin, enim velit dignissim
            turpis, ac ullamcorper sem felis eu enim. Aenean vitae euismod
            justo, vel tristique arcu. Integer ac pulvinar massa. Nunc faucibus
            sit amet leo id rutrum. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Maecenas lobortis
            hendrerit lorem, quis tincidunt tortor sollicitudin auctor. Integer
            tortor ex, finibus a dolor a, dictum laoreet massa. Proin hendrerit
            ipsum et vehicula tincidunt. Aliquam nibh lorem, eleifend eget
            luctus dictum, scelerisque quis risus. Proin id dolor sed metus
            imperdiet facilisis. Pellentesque rhoncus scelerisque nisi, id
            malesuada velit tristique et. Donec efficitur tempus nisl, nec
            sodales erat imperdiet vitae. Vivamus sit amet nibh at ante interdum
            mattis eget lobortis dui. Morbi ut turpis in felis sollicitudin
            fringilla. Nullam ut laoreet est, in lobortis purus. Nulla egestas
            suscipit eros, at cursus ante facilisis nec. Nunc facilisis ultrices
            nisi quis viverra. Fusce justo nulla, mattis at mauris vel, aliquam
            aliquam justo. Pellentesque vitae velit eget lorem consectetur
            fringilla. Duis ac nibh est. Donec sit amet bibendum turpis. In eu
            sem laoreet, mollis augue sit amet, rhoncus elit. Duis vulputate
            porta egestas. Phasellus pellentesque felis elit, sed consectetur
            neque varius eget. Proin tincidunt orci arcu. Sed urna nunc,
            fermentum vel consectetur sit amet, varius non justo. Nunc sit amet
            arcu viverra, pellentesque sapien eget, ultrices mauris. Sed
            imperdiet vel mi a porttitor. Vestibulum tincidunt porttitor metus
            vel luctus. Aliquam tellus ligula, faucibus sed congue et, egestas
            id urna. Vestibulum feugiat elit at risus dapibus rhoncus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum,
            diam nec mattis sollicitudin, enim velit dignissim turpis, ac
            ullamcorper sem felis eu enim. Aenean vitae euismod justo, vel
            tristique arcu. Integer ac pulvinar massa. Nunc faucibus sit amet
            leo id rutrum. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Maecenas lobortis hendrerit
            lorem, quis tincidunt tortor sollicitudin auctor. Integer tortor ex,
            finibus a dolor a, dictum laoreet massa. Proin hendrerit ipsum et
            vehicula tincidunt. Aliquam nibh lorem, eleifend eget luctus dictum,
            scelerisque quis risus. Proin id dolor sed metus imperdiet
            facilisis. Pellentesque rhoncus scelerisque nisi, id malesuada velit
            tristique et. Donec efficitur tempus nisl, nec sodales erat
            imperdiet vitae. Vivamus sit amet nibh at ante interdum mattis eget
            lobortis dui. Morbi ut turpis in felis sollicitudin fringilla.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
