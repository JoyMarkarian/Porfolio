const express = require("express");

const router = express.Router();

const projectControllers = require("./controllers/projectControllers");
const skillControllers = require("./controllers/skillControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

router.get("/skills", skillControllers.browse);

module.exports = router;
