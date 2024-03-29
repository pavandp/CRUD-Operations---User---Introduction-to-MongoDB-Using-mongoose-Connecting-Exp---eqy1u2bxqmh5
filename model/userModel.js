const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  // email as a String,
   name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
// Create and export the User model