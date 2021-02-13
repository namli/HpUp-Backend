const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.APP_PORT;


const bodyparser = require('body-parser');
const cors = require('cors');
const session = require("express-session");

//Import routes
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const companiesRouter = require("./routes/companies");
const hollydayRouter = require("./routes/hollydayrequests");

app.use(cors());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    name: "migracode",
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);

app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/companies", companiesRouter);
app.use("/hollyday", hollydayRouter);

app.get('/', (req, res) => {
  res.send('I\'m here');
});

app.listen(port, () => {
  console.log(`Server wait you no http://localhost:${port}`);
});