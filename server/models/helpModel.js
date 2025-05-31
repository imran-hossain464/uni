import mongoose from 'mongoose';

const helpSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Request for Help', 'Offer for Help']
  },
  Options: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Help = mongoose.model('Help', helpSchema);

export default Help;