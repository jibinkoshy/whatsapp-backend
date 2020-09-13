const mongoose = require('mongoose');

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

exports.Messages = mongoose.model('messageContent', whatsappSchema);
