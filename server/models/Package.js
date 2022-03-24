const mongoose = require('mongoose');
const {
   Schema
} = mongoose;

const packageSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   description: {
      type: String
   },
   perks: [{
      type: Schema.Types.ObjectId,
      ref: 'Perk',
      required: true
   }],
   image: {
      type: String
   },
   price: {
      type: String,
      required: true,
      min: 0.99
   },
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;