const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

var Pet = sequelize.define('pet',{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    name:Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    version: Sequelize.BIGINT
},{
    timestamps:true
});

var now = Date.now();
Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    version: 0
}).then(function (p) {
    console.log('created：' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});