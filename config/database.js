const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connected"))
    .catch((error) => {
         console.log("not connected");
         console.error(error.message);
         process.exit(1);
    });
}


module.exports = dbConnect;