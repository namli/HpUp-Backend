const express = require("express");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const models = require('../models');
const User = models.user;

const router = express.Router();

const checkIfLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next();
    } else {
        res.status(401).json({ code: "unauthorized" });
    }
};

router.use(checkIfLoggedIn);

// returns list of users
router.get("/", (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(next);
});

// shows specific user, still to be populated with requests and companies
router.get("/:id", (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then(user => {
            res.status(200).json(user);
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
        const editedUser = await User.update(
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
        await User.destroy({ where: { id: id } });
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
