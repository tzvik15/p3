const mongoose = require ('mongoose');

const CardSchema = new mongoose.Schema({
   title: {type:String},
   description: {type:String},
   cost: {type:Number}
})

const Card = mongoose.model('CardSchema', CardSchema);

module.exports = Card;