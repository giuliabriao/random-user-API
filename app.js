const faker = require('faker');
const express = require('express');
const app = express();
const port = 8080;

faker.locale = 'pt_BR';

    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let gender = faker.name.gender();
    let randomEmail = faker.internet.email(randomFirstName, randomLastName);

    let dataFake = faker.date.past(65, 2020);

    let dataSemAspas = JSON.stringify(dataFake).split('"')[1];
    let apenasData = dataSemAspas.split("T")[0];
    let [yyyy, mm, dd] = apenasData.split("-");
    let bday = `${dd}/${mm}/${yyyy}`;
    
    app.get('/', (req, res) => {
      res.send(randomUser = [{
        
        randomFirstName,
        randomLastName,
        gender,
        bday,
        randomEmail,

      }])
    });

    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    });