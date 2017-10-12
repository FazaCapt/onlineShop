// http://mongoosejs.com/docs/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

var db = mongoose.connection;
db.on('error', (erroor) => {
    console.warn('Warning', erroor);
})
db.once('open', () => console.log('Good to go!'));