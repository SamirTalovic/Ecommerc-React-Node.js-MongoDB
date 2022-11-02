const app = require("./app")

const dotenv = require("dotenv")

const connectDatabase = require("./config/database")
//Config

dotenv.config({path:'backend/config/config.env'})

//Connect
connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`Server is working fine on port localhost${process.env.PORT} in ${process.env.NODE_ENV} mode`)
}
)
module.exports = app