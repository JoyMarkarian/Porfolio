CREATE DATABASE IF NOT EXISTS portfolio;

USE portofolio;

DROP TABLE IF EXISTS project ;

DROP TABLE IF EXISTS skill ;

DROP TABLE IF EXISTS skillUsed;

CREATE TABLE
    project (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        picture VARCHAR(255) NOT NULL,
        githubLink VARCHAR(255) NOT NULL,
        websiteLink VARCHAR(255)
    );

INSERT INTO
    `project` (
        name,
        description,
        picture,
        githubLink,
        websiteLink
    )
VALUES (
        "Dragon Team",
        "Réalisation d'un projet en équipe autour de l'univers Dragon Ball Z",
        "frontend/src/assets/DragonTeam.png",
        "https://github.com/JoyMarkarian/DragonTeam",
        "https://wildcodeschool.github.io/2022-09-JS-RMT-JSCREW-TEAM-C/"
    ), (
        "PokeMall",
        "Réalisation d'un projet en équipe autour de l'univers Pokémon",
        "frontend/src/assets/PokeMall.png",
        "https://github.com/JoyMarkarian/PokeMall"
    ), (
        "Space Journey",
        "Elaboration, en 48 heures, d'une application web sous forme de jeu interactif",
        "frontend/src/assets/SpaceJourney.png",
        "https://github.com/JoyMarkarian/SpaceJourney"
    ), (
        "Rent A Kart",
        "Elaboration, en 72 heures, d'une application web de gestion de flotte de véhicules",
        "frontend/src/assets/RentAKart.png",
        "https://github.com/o6ris/NoPainNoGainTheComeBack"
    ), (
        "Make Sense",
        "Réalisation d'un intranet en équipe pour l'entreprise Make Sense",
        "frontend/src/assets/MakeSense.png",
        "https://github.com/WildCodeSchool/2022-09-RMT-JSCREW-Makesense"
    );

CREATE TABLE
    skill (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        picture VARCHAR(255) NULL
    );

INSERT INTO
    skill (name, picture)
VALUES ("Bootstrap"), ("CSS3"), ("Figma"), ("Git"), ("Github"), ("HTML5"), ("Javascript"), ("Linkedin"), ("MySQL"), ("NodeJS"), ("Postman"), ("React JS"), ("SQL"), ("Tailwind"), ("Visual Studio Code");

CREATE TABLE
    skillsUsed (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        project_id INT NOT NULL,
        CONSTRAINT fk_skillUsed_project FOREIGN KEY (project_id) REFERENCES project(id),
        skill_id INT NOT NULL,
        CONSTRAINT fk_skillUsed_skill FOREIGN KEY (skill_id) REFERENCES skill(id),
    );

INSERT INTO
    skillUsed (project_id, skill_id)
VALUES (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 14);