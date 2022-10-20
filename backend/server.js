const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//Configuration

dotenv.config({path:"backend/config/config.env"});

//Connecting to database
connectDatabase()



      