
const models = require('./models');
const Company = models.company;
//const company = require('./models/company');



Company.create({
  name: "My super company",
  operating_countries: new Array('123123', '123123', 'dfsfsdf'),
  users: 1
})
  .then((newCompany) => {
    console.log(newCompany.get());
  })
  .catch((err) => {
    console.log("Error while company creation : ", err);
  });