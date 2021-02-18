const express = require("express");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const models = require('../models');
const User = models.user;
const Request = models.request;

const router = express.Router();

const checkIfLoggedIn = (req, res, next) => {
  if (req.session) {
    next();
  } else {
    res.status(401).json({ code: "unauthorized" });
  }
};

router.use(checkIfLoggedIn);

// returns list of users
router.get("/", (req, res, next) => {
  Request.findAll()
    .then(requests => {
      res.status(200).json(requests);
    })
    .catch(next);
});

// shows specific user, still to be populated with requests and companies
router.get("/:id", (req, res, next) => {
  Request.findOne({ where: { id: req.params.id } })
    .then(request => {
      res.status(200).json(request);
    })
    .catch(next);
});

// add request

router.post("/", async (req, res, next) => {
  const {
    initDate,
    endDate,
    type,
    status,
    title,
    description,
    documentUrl,
    userId,
    companyId
  } = req.body;

  try {
    const newReq = await Request.create({
      initDate,
      endDate,
      type,
      status,
      title,
      description,
      documentUrl,
      userId,
      companyId
    });

    return res.json(newReq);
  } catch (error) {
    next(error);
  }


});

// UPDATE user POST action
router.patch("/:id", async (req, res, next) => {
  const {
    initDate,
    endDate,
    type,
    status,
    title,
    description,
    documentUrl,
    userId,
    companyId
  } = req.body;

  const { id } = req.params;
  try {
    const editedReq = await Request.update(
      {
        initDate: initDate,
        endDate: endDate,
        type: type,
        status: status,
        title: title,
        description: description,
        documentUrl: documentUrl,
        userId: userId,
        companyId: companyId
      },
      { where: { id: id } }
    );
    res.status(200).json(editedReq);
  } catch (error) {
    next(error);
  }
});

// DELETE user action
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Request.destroy({ where: { id: id } });
    const requests = await Request.findAll();
    res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
