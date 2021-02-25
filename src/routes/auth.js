const express = require("express");
const bcrypt = require("bcrypt");

const models = require('../models');
const User = models.user;
const Company = models.company;



const bcryptSalt = 10;

const router = express.Router();

router.post("/signup", async (req, res, next) => {
    const {
        username,
        email,
        password,
        imgUrl,
        basedCountry,
        about,
        remainingDays,
        role,
        requests,
        companyId,
        firstName,
        lastName
    } = req.body
    try {
        const user = await User.findOne({ where: { username: username } });
        if (user) {
            return res.status(422).json({ code: "username-not-unique" });
        }
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            imgUrl,
            basedCountry,
            about,
            remainingDays,
            role,
            requests,
            companyId,
            firstName,
            lastName
        });
        // .then((user) => {
        //     Company.findOne({ where: { id: user.companyId } }).then((company) => {
        //         return company.addUser(user);
        //     }).then((company) => {
        //         return company.countUsers();
        //     });

        //     // const company = await user.setCompany(2);
        //     // console.log(company);
        //     //Company.addUser(user.id);
        // });
        req.session.currentUser = newUser;
        return res.json(newUser);
    } catch (error) {
        next(error);
    }
});

router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(404).json({ code: "not-found" });
        }
        if (bcrypt.compareSync(password, user.password)) {
            req.session.currentUser = user;
            return res.status(200).json(user);
        }
    } catch (error) {
        next(error);
    }
});

router.get("/logout", (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            next(err);
        }
        return res.status(204).send();
    });
});

module.exports = router;
