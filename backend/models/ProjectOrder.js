const mongoose = require('mongoose');

const subItemschema = new mongoose.Schema({
  sno: Number,
  description: String,
  unit: String,
  quantity: Number,
  ratePerUnit: Number,
  gstPercentage: Number,
  discount: Number,
  amount: Number,
});
const itemSchema = new mongoose.Schema({
  sno: Number,
  description: String,
  unit: String,
  quantity: Number,
  ratePerUnit: Number,
  gstPercentage: Number,
  discount: Number,
  amount: Number,
  subItems:[subItemschema] 
});

const projectOrderSchema = new mongoose.Schema({
  vendorCode: String,
  name: String,
  contactperson: String,
  address: String,
  district: String,
  state: String,
  pinCode: String,
  email: String,
  contact: String,
  gstNumber: String,
  locationCode: String,
  billtoname: String,
  billtocp: String,
  billToAddress: String,
  billToGstNumber: String,
  shippingAddress: String,
  billToDistrict: String,
  billToState: String,
  billToPinCode: String,
  billToContact: String,
  billToEmail: String,
  deliveryLocationCode: String,
  deliveryName: String,
  delcp: String,
  deliveryDistrict: String,
  deliveryState: String,
  deliveryPinCode: String,
  deliveryContact: String,
  deliveryEmail: String,
  poNumber: String,
  poDate: Date,
  podeliverydate: Date,
  items: [itemSchema],
  totalAmount: Number, 
  topsection: String,
  Notes: String,
  tnc: String,
  signature: {
    fileName: { type: String },
    filePath: { type: String },
    fileSize: { type: Number },
    mimeType: { type: String },
    uploadDate: { type: Date, default: Date.now },
  },

});

module.exports = mongoose.model('ProjectOrder', projectOrderSchema);
