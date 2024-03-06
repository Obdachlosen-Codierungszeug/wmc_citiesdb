var mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://127.0.0.1:27017/population';
mongoose.connect(MONGODB_URI).then(function () {
    console.log('Connected to population db.');
}).catch(function (err) {
    console.error('Connection error:', err);
});
