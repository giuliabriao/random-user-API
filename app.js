var faker = require('faker');

faker.locale = 'pt_BR';

    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let gender = faker.name.gender();
    let randomEmail = faker.internet.email(randomFirstName, randomLastName);
    let past = faker.date.past(65, 2020);

// console.log(`Nome: ${randomFirstName}, e-mail: ${randomEmail}`);
console.log(past);