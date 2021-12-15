const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  producId: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    required: true
  },
  type:{
    type: Boolean,
  required: true
  },
  priceUnity:{
    type: Number,
    require: true
  },
  ingredients: {
    type: [String],
    require: true
  },
  flavor:{
    type: [String],
  }
});


const Products = mongoose.model('Products', productsSchema);
module.export = Products;
