const mongoose = require("mongoose")



const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,{useNewUrlParser: true,
        useUnifiedTopology: true}).then(con => {
            console.log(`Database successfully connected with : ${con.connection.host}`)
        }
    ).catch(
       con1 =>{
        console.log("DB is not working fine on host 27017")
       }
    )
}
module.exports = connectDatabase

