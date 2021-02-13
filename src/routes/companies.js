const express = require("express");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const models = require('../models');
const Company = models.company;

const router = express.Router();

const checkIfLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.status(401).json({ code: "unauthorized" });
  }
};

router.use(checkIfLoggedIn);

// returns list of companies
router.get("/", (req, res, next) => {
  Company.findAll()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(next);
});

// shows specific user, still to be populated with requests and companies
router.get("/:id", (req, res, next) => {
  Company.findOne({ where: { id: req.params.id } })
    .then(company => {
      res.status(200).json(company);
    })
    .catch(next);
});

// UPDATE user POST action
router.patch("/:id", async (req, res, next) => {
  const {
    username,
    email,
    password,
    imgUrl,
    basedCountry,
    about,
    remainingDays,
    role,
    requestId,
    companyId
  } = req.body;
  const { id } = req.params;
  try {
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const editedCompany = await Company.update(
      {
        username: username,
        email: email,
        password: hashedPassword,
        imgUrl: imgUrl,
        basedCountry: basedCountry,
        about: about,
        remainingDays: remainingDays,
        role: role,
        requestId: requestId,
        companyId: companyId
      },
      { where: { id: id } }
    );
    res.status(200).json(editedUser);
  } catch (error) {
    next(error);
  }
});

// DELETE user action
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Company.destroy({ where: { id: id } });
    const companies = await Company.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
