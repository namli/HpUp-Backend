const express = require("express");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const models = require('../models');
const Company = models.company;
const Request = models.request;
const User = models.user;

const router = express.Router();

const checkIfLoggedIn = (req, res, next) => {
  if (req.session) {
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

// shows specific user, still to be populated with requests and companies
router.get("/:id/requests", (req, res, next) => {
  Request.findAll({
    where: { companyId: req.params.id },
    include: [{
      model: User,
      attributes: ['firstName', 'lastName'],
    }]
  })
    .then(requests => {
      res.status(200).json(requests);
    })
    .catch(next);
});

// add company
router.post("/", async (req, res, next) => {
  const {
    name,
    operatingCountries,
  } = req.body
  try {
    const compCheck = await Company.findOne({ where: { name: name } });
    if (compCheck) {
      return res.status(422).json({ code: "Companyname-not-unique" });
    }

    const newCompany = await Company.create({
      name,
      operatingCountries
    });

    return res.json(newCompany);
  } catch (error) {
    next(error);
  }
});


// UPDATE company 
router.patch("/:id", async (req, res, next) => {
  const {
    name,
    operatingCountries,
  } = req.body;
  const { id } = req.params;
  try {
    const rez = await Company.update(
      {
        name: name,
        operatingCountries: operatingCountries
      },
      { where: { id: id } }
    );
    //res.status(200).json(editedCompany);

    const editedCompany = await Company.findOne({ where: { id: req.params.id } })
      .then(company => {
        return company;
      })
      .catch(next);
    res.status(200).json(editedCompany);

  } catch (error) {
    next(error);
  }
});

// DELETE company action
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Company.destroy({ where: { id: id } });
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
