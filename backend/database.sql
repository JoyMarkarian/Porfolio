CREATE DATABASE IF NOT EXISTS portfolio;

USE portfolio;

DROP TABLE IF EXISTS project ;

DROP TABLE IF EXISTS skill ;

DROP TABLE IF EXISTS skillUsed;

CREATE TABLE
    project (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        picture VARCHAR(255) NOT NULL,
        githubLink VARCHAR(255) NOT NULL
    );

INSERT INTO
    project (
        id,
        name,
        description,
        picture,
        githubLink
    )
VALUES (
        1,
        "Dragon Team",
        "Réalisation d'un projet en équipe autour de l'univers Dragon Ball Z",
        "frontend/src/assets/DragonTeam.png",
        "https://github.com/JoyMarkarian/DragonTeam"
    ), (
        2,
        "PokeMall",
        "Réalisation d'un projet en équipe autour de l'univers Pokémon",
        "frontend/src/assets/PokeMall.png",
        "https://github.com/JoyMarkarian/PokeMall"
    ), (
        3,
        "Space Journey",
        "Elaboration, en 48 heures, d'une application web sous forme de jeu interactif",
        "frontend/src/assets/SpaceJourney.png",
        "https://github.com/JoyMarkarian/SpaceJourney"
    ), (
        4,
        "Rent A Kart",
        "Elaboration, en 72 heures, d'une application web de gestion de flotte de véhicules",
        "frontend/src/assets/RentAKart.png",
        "https://github.com/o6ris/NoPainNoGainTheComeBack"
    ), (
        5,
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

INSERT INTO skill (id, name)
VALUES (1, "Bootstrap"), (2, "CSS3"), (3, "Figma"), (4, "Git"), (5, "Github"), (6, "HTML5"), (7, "Javascript"), (8, "Linkedin"), (9, "MySQL"), (10, "NodeJS"), (11, "Postman"), (12, "React JS"), (13, "SQL"), (14, "Tailwind"), (15, "Visual Studio Code");

CREATE TABLE
    skillUsed (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        project_id INT NOT NULL,
        CONSTRAINT fk_skillUsed_project FOREIGN KEY (project_id) REFERENCES project(id),
        skill_id INT NOT NULL,
        CONSTRAINT fk_skillUsed_skill FOREIGN KEY (skill_id) REFERENCES skill(id)
    );

INSERT INTO
    skillUsed (project_id, skill_id)
VALUES (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 15);