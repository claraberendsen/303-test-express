const faker = require('faker');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('articles', [{
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  {
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  {
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  {
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  {
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  {
    title: faker.lorem.sentence(),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    content: faker.lorem.paragraphs(),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
  ]),

  down: queryInterface => queryInterface.bulkDelete('articles', null, {}),
};
