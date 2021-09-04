/** Package */
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")

const productSchema = new mongoose.Schema({
    id:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    price:{
        type: "Number",
        required: true
    },
    existence:{
        type: "Number",
        required: true,
        unique: true
    },
    calification:{
        type: "Number",
        required: true,
        unique: true
    },
    category:{
        type: "String",
        required: true,
        unique: true
    },
    mark:{
        type: "String",
        required: true,
        unique: true
    },
    discount:{
        type: "Number",
        required: true,
        unique: true
    } 

})

productSchema.plugin(validator)
module.exports = productSchema