/** packages */
const mongoose = require("mongoose")
const db = require("../db-conection/mongodb")

/** import schemas */
const schema = require("../schemas/product.schema")
db()
schema.statics = {
    create: function(data, cb){
        let doc = new this(data)
        doc.save(cb)
    },
    getAll: function(query, cb){
        this.find(query, cb)
    },
    getByCode: function(query, cb){
        this.find(query, cb)
    },
    update: function(query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb)
    },
    delete: function(query, cb){
        this.findOneAndDelete(query, cb)
    }
}

const dto = mongoose.model("coll_product", schema)
module.exports = dto