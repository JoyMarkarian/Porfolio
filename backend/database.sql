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
        "assets/images/DragonTeam.png",
        "https://github.com/JoyMarkarian/DragonTeam"
    ), (
        2,
        "PokeMall",
        "Réalisation d'un projet en équipe autour de l'univers Pokémon",
        "assets/images/PokeMall.png",
        "https://github.com/JoyMarkarian/PokeMall"
    ), (
        3,
        "Space Journey",
        "Elaboration, en 48 heures, d'une application web sous forme de jeu interactif",
        "assets/images/SpaceJourney.png",
        "https://github.com/JoyMarkarian/SpaceJourney"
    ), (
        4,
        "Rent A Kart",
        "Elaboration, en 72 heures, d'une application web de gestion de flotte de véhicules",
        "assets/images/RentAKart.png",
        "https://github.com/o6ris/NoPainNoGainTheComeBack"
    ), (
        5,
        "Make Sense",
        "Réalisation d'un intranet en équipe pour l'entreprise Make Sense",
        "assets/images/MakeSense.png",
        "https://github.com/WildCodeSchool/2022-09-RMT-JSCREW-Makesense"
    );

CREATE TABLE
    skill (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        picture VARCHAR(255) NULL
    );

INSERT INTO
    skill (id, name, type, picture)
VALUES (
        1,
        "Bootstrap",
        1,
        "/assets/images/bootstrap.svg"
    ), (
        2,
        "CSS3",
        1,
        "assets/images/css3.svg"
    ), (
        3,
        "Figma",
        2,
        "assets/images/figma.svg"
    ), (
        4,
        "Git",
        2,
        "assets/images/git.svg"
    ), (
        5,
        "Github",
        2,
        "assets/images/github.svg"
    ), (
        6,
        "HTML5",
        1,
        "assets/images/html5.svg"
    ), (
        7,
        "Javascript",
        1,
        "assets/images/javascript.svg"
    ), (
        8,
        "MySQL",
        2,
        "assets/images/mysql.svg"
    ), (
        9,
        "NodeJS",
        1,
        "assets/images/nodejs.svg"
    ), (
        10,
        "Postman",
        2,
        "assets/images/postman.svg"
    ), (
        11,
        "React JS",
        1,
        "assets/images/react.svg"
    ), (
        12,
        "SQL",
        1,
        "assets/images/sql.svg"
    ), (
        13,
        "Tailwind",
        1,
        "assets/images/tailwind.svg"
    ), (
        14,
        "Visual Studio Code",
        2,
        "./assets/images/vscode.svg"
    );

CREATE TABLE
    skillUsed (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        project_id INT NULL,
        CONSTRAINT fk_skillUsed_project FOREIGN KEY (project_id) REFERENCES project(id),
        skill_id INT NULL,
        CONSTRAINT fk_skillUsed_skill FOREIGN KEY (skill_id) REFERENCES skill(id)
    );

INSERT INTO
    skillUsed (project_id, skill_id)
VALUES (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 14), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 14), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 14), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 14), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7), (5, 14);