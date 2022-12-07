let mongoose = require('mongoose')
let schema = mongoose.Schema

let telefonSchema = new schema({
    marka: String,
    model: String,
    cena: Number
})

module.exports = mongoose.model("Telefon", "telefonSchema")