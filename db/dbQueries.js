const Sequelize = require('sequelize');

const sequelize = new Sequelize('fake_data', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});


const getPictures = async (callback) => {
    let randNum = Math.floor(Math.random() * (100 - 1) + 1)
    let fakeHouse = await sequelize.query(`SELECT * FROM fakeHouses WHERE id='${randNum}'`, {
        type: sequelize.QueryTypes.SELECT
    })

    let fakeUrls = await sequelize.query(`SELECT * FROM fakeUrls WHERE fakeHouseID='${randNum}'`, {
        type: sequelize.QueryTypes.SELECT
    })
    callback(fakeHouse, fakeUrls)
}

module.exports.getPictures = getPictures