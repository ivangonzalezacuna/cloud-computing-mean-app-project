const express = require('express');
const path = require('path');
var router = express.Router();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cloud-computing-ivan-basil/'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ivangonzalez:ivanCELTA98@cluster0-j4zui.mongodb.net/test?ssl=true&replicaSet=advancedNodeClust-shard-0&authSource=admin&retryWrites=true";

// Connect to the database before starting the application server.
MongoClient.connect(uri, function (err, client) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    // process.exit(1);
  }

  console.log("Connected...");

  // Save database object from the callback for reuse.
  collection = client.db("test").collection("users");
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});
