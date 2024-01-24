const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
  },
  accountCreated: {
    type: Date, // Date when account was created
    default: () => Date.now(), //making today's date a as default date
    immutable: true,
  },
  updatedAt: Date,
  friend: mongoose.Schema.Types.ObjectId, // Reference to another document/USER
  hobbies: [String], //array of strings
  address: addressSchema,
});

//create methods on userSChema
userSchema.methods.sayHi = function () {
  console.log(`Hi I am ${this.name}`);
};

module.exports = mongoose.model("User", userSchema);
