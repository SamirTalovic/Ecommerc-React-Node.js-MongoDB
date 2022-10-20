const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true,"Please enter product Name"],
        trim:true
    },
    description:{
        type: String,
        require:[true,"Please enter product Desc"]
    },
    price:{
        type: Number,
        require:[true,"Please enter product Price"],
        maxLenght:[8,"Price cannot exceed 8 caracters"]
    },
    name:{
        type: Number,
        default:0
    },
    image:[{
         public_id:{
            type: String,
            required:true
         },
         url:{
            type: String,
            required:true
         }
    }],
    categorie:{
        type:String,
        required:[true,"Please enter product categorie"],
        
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLenght:[4,"Stock cannot exceed more then 4 caracters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    Reviews:{
         name:{
            type:String,
            required:true
         },
         rating:{
            
            type:Number,
            required:true
         },
         comment:{
            type:String,
            required:true
         },
        
    }
})