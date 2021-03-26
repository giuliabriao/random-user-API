const faker = require('faker');
const express = require('express');
const app = express();
const port = 3000;

faker.locale = 'pt_BR';
    
    app.get('/random-user', (req, res) => {
        let randomFirstName = faker.name.firstName();
        let randomLastName = faker.name.lastName();
        let gender = faker.name.gender();
        let randomEmail = faker.internet.email(randomFirstName, randomLastName);
        let randomPassword = faker.internet.password();

        let dataFake = faker.date.past(65, 2020);

        let dataSemAspas = JSON.stringify(dataFake).split('"')[1];
        let apenasData = dataSemAspas.split("T")[0];
        let [yyyy, mm, dd] = apenasData.split("-");
        let bday = `${dd}/${mm}/${yyyy}`;

        res.send(randomUser = [{
            
            randomFirstName,
            randomLastName,
            gender,
            bday,
            randomEmail,
            randomPassword

        }])
    });

    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    });
