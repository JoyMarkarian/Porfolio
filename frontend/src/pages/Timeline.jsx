import React from "react";
import Background from "../components/Background";

function Timeline() {
  return (
    <>
      <Background />
      <div className="flex w-full">
        <div className="bg-[#FFFFFF] w-1/6 dark:bg-[#1A1A1A] flex justify-center items-center">
          <h1 className="-rotate-90 text-[#1A1A1A] dark:text-[#FFFFFF] text-2xl sm:text-4xl font-bold">
            PARCOURS
          </h1>
        </div>
        <div
          id="timeline"
          className="timeline-container bg-[#1A1A1A] dark:bg-[#121212] w-5/6"
        >
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content sm:mr-6">
              <h3 className="text-white">
                Développement web et web mobile @WildCodeSchool
              </h3>
              <h4 className="text-white">Sept. 2022 - Mars 2023</h4>
              <p className="text-white sm:text-justify">
                ▪ Développer la partie front-end d'une application web en
                intégrant les recommandations de sécurité : • Utiliser les
                bonnes pratiques UI/UX • Créer des wireframes • Intégrer une
                page en #HTML #CSS • Booster l'interface du site avec
                #JavaScript • Créer une interface responsive avec #CSS3 ▪
                Développer la partie back-end d'une application web en intégrant
                les recommandations de sécurité : • Comprendre comment résoudre
                des problèmes techniques grâce à des langages reconnus comme
                #Javascript • Déployer des projets web en utilisant librairies &
                framework professionnel #Express • Concevoir et mettre en oeuvre
                une #Basededonnées #SQL/#NoSQL • Développer des #API et les
                interfacer avec ses applications • Travailler en équipe et
                collaborer avec #Git & #GithHub ▪ Compétences transversales : •
                Créer un backlog #SCRUM, planifier des tâches et effectuer leur
                suivi
              </p>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content sm:ml-6">
              <h3 className="text-white">Product Manager @Lefebvre-Dalloz</h3>
              <h4 className="text-white">Août 2019 - Sept. 2022</h4>
              <p className="text-white sm:text-justify">
                Définition de la stratégie d’évolution et d’innovation en
                cohérence avec la roadmap des produits et les besoins clients
                pour le marché des professions réglementées (Avocats et
                Notaires) • Analyse de la concurrence et les innovations et
                identifier de nouvelles fonctionnalités et de nouvelles
                propositions de valeur • Analyse des usages et besoins clients
                notamment (suivi des KPis, animation d’ateliers avec les
                utilisateurs pour tester des maquettes ou des prototypes) •
                Animation du processus de conception d’offre en collaboration
                avec les pôles et la Rédaction et les chefs de marché • Pilotage
                des développements issus du processus de création ou de
                structuration des offres (gestion de projet pour les phases de
                création, lancement et suivi des offres)
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content sm:mr-6">
              <h3 className="text-white">
                Rédactrice juridique @Lefebvre-Dalloz
              </h3>
              <h4 className="text-white">Févr. 2017 - Août 2019</h4>
              <p className="text-white sm:text-justify">
                • Participation à l’élaboration des modules Divorce, Bail
                d’habitation, Protection des données personnelles, Procédure
                civile, Famille et personnes, Voies d'exécution • Réception,
                lecture, préparation et harmonisation des manuscrits •
                Conception de contenus pratiques interactifs (schémas,
                check-lists, e-procédures) • Élaboration de la Newsletter Dalloz
                Huissiers • Actualisation des formulaires de procédure civile
              </p>
            </div>
          </div>

          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content sm:ml-6">
              <h3 className="text-white">
                Assistante de justice @Cour d'appel de Paris
              </h3>
              <h4 className="text-white">Févr. 2015 - Févr 2017</h4>
              <p className="text-white sm:text-justify">
                Recherche de documentation, législation, jurisprudence et
                doctrine • Rédaction de notes de synthèse de dossiers et de
                projets de décision
              </p>
            </div>
          </div>

          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content sm:mr-6">
              <h3 className="text-white">
                Master 2 Droit des contentieux et de l'exécution @Université
                Paris-Est Créteil
              </h3>
              <h4 className="text-white">Sept. 2012 - Juin 2013</h4>
              <p className="text-white sm:text-justify">
                • Maitrise de la polyvalence des exigences techniques de la
                pratique judiciaire. Une bonne connaissance du déroulement des
                procédures générales et spéciales, internes et internationales,
                et la gestions des incidents qui viennent les perturber •
                Maitrise des bons réflexes et anticipation des difficultés •
                Acquisition d'une bonne connaissance des usages professionnels
                permettant une bonne intégration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
