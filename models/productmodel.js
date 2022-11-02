const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,"You must enter the name"],
            trim: true,
            maxLenght:[100,"Product name cannot exceed more then 100 caracters"]

        },
        price:{
            type:Number,
            required:[true,"You must enter the price"],
            maxLenght:[5,"Product name cannot exceed more then 5 caracters"],
            default:0.0
        },
        descripion:{
            type:String,
            required:[true,"Please enter product desc"]
        },
        rating:{
            type:Number,
            default:0
        },
        image:{
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }

        },
        categories:{
            type:String,
            required:[true,"Please select categorie"],
            enum:{
                values:[
                    "Electronics",
                    "Cameras",
                    "Laptops",
                    "Accesoaries",
                    "Headphones",
                    "Food",
                    "Books",
                    "Cloath/Shoes",
                    "Beauty/Health",
                    "Sports",
                    "Outdoor",
                    "Home"
                ],
                message:"Please enter correct category for product"
            }
            
        },
        seller:{
            type:String,
            required:[true,"Please enter product seller"]
        },
        stock:{
            type:Number,
            default:0,
            maxLenght:[5,"Product name cannot exceed more then 5 caracters"],
            required:[true,"Please enter product stock"]
        },
        numOfReviews:{
            type:Number,
            default:0
        },
        reviews:{
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
            }
           
        },
        createdAt:{
            type:Date,
            default:Date.now
        }



    })
    module.exports = mongoose.model("Product",productSchema)