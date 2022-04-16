const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://nanda45:Nanda13jan@cluster0.se0pz.mongodb.net/expertia?retryWrites=true&w=majority"
  );
};

module.exports = connect;
