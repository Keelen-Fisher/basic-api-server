'use strict';


const { sequelizeDatabase } = require('./src/modules');
const { start } = require('./src/server');

// creates all associated tables 
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    // this is dangerous: inserts everytime it is started: 
    // PeopleModel.create({name: 'Keelen});
    start();
  })
  .catch(err => console.error(err));
