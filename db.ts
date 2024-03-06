let mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/population';

mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to population db.');
}).catch(err => {
    console.error('Connection error:', err);
});