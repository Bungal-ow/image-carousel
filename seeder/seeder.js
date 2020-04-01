const fs = require('fs')
const faker = require('faker')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
///////
//////////////////
const masterArr = require('./masterArr.js') // **
// above is a nested array of all the url's to pictures for each home

const sequelize = new Sequelize('fake_data', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
})  

const FakeHouse = sequelize.define("fakeHouse", {
  address: Sequelize.TEXT,
  price: Sequelize.STRING,
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER 
  }
});

const FakeUrl = sequelize.define("fakeUrl", {
  fakeHouseID: Sequelize.INTEGER,
  url: Sequelize.STRING
});

(async () => {
  await sequelize.sync({ force: true });

  //    *** CODE HERE ***
  masterArr.forEach(function (subArr, index1) {
    let fakeHouse = FakeHouse.create({
      address: faker.address.streetAddress(),
      price: faker.finance.amount(100000, 2000000)
    })
    subArr.forEach(function (url, index2) {
      let fakeUrl = FakeUrl.create({
        fakeHouseID: index1 + 1,
        url: url
      })
    })
  }) .then(function () {
    sequelize.close()
    console.log('connection closed')
  })
  
})() 

