const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb+srv://akbarali:akbarali2206@cluster0.1t6ltwf.mongodb.net/abdulaziz?retryWrites=true&w=majority')
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB:', err));
}