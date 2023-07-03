const mongoose = require("mongoose");

async function connectToDatabase() {
  // Connect to the MongoDB database
  mongoose
    .connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { connectToDatabase };