const mongoose = require('mongoose');

const { Schema } = mongoose;

const nameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

const model = mongoose.model('Name', nameSchema);

module.exports = model;
