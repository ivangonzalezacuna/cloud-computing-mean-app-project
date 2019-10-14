const config = require('config.json');
const mongoose = require('mongoose');

const uri = "mongodb+srv://ivangonzalez:ivanCELTA98@cluster0-j4zui.mongodb.net/test?ssl=true&replicaSet=advancedNodeClust-shard-0&authSource=admin&retryWrites=true";

const connector = mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};