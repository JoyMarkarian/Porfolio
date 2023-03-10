const models = require("../models");
const validate = require("../services/projects");

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.project
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        models.skill.findByProject(req.params.id).then(([skill]) => {
          res.send({ ...rows[0], skills: skill });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const project = req.body;
  const validation = validate(project, "optional");
  const id = parseInt(req.params.id, 10);

  if (validation) {
    res.status(422).send(validation);
  } else {
    models.project
      .update(project, id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const add = (req, res) => {
  const project = req.body;
  const error = validate(project, "required");

  if (!error) {
    models.project
      .insert(project)
      .then(([result]) => {
        res.location(`/projects/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.status(422).send(error);
  }
};

const destroy = (req, res) => {
  models.project
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
