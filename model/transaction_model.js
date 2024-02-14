const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const TaxSchema = new Schema({
  cus_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  trans: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const TaxModel = db.model("tax", TaxSchema);

module.exports = TaxModel;
