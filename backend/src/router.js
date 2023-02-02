const express = require("express");

const router = express.Router();

const projectControllers = require("./controllers/projectControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

module.exports = router;
