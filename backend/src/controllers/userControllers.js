const Joi = require("joi");

const user = {
  email: "jmarkarian@hotmail.fr",
  password: "Jonas15221!",
  name: "Joy Markarian",
  role: "admin",
};

const validateUser = (req, res) => {
  const { error } = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),
    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (
    !error &&
    req.body.email === user.email &&
    req.body.password === user.password
  ) {
    res
      .status(201)
      .cookie("access_token", "connexion validated", {
        httpOnly: true,
      })
      .json({ name: user.name, role: user.role, email: user.email });
  } else {
    res.status(500).send("Wrongs credentials");
  }
};

module.exports = { validateUser };
