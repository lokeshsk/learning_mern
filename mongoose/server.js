// console.log("Hello World");
const mongoose = require("mongoose");
const User = require("./User");
//connect with mongodb using mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/testdb") //localhost was not working
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => console.log(`error in coennection ${e}`));

// mongoose.connect(
//   "mongodb://localhost:27017/testdb",
//   () => {
//     console.log("Connected to DB");
//   },
//   (e) => console.log(e)
// );
//using promise
// const user = new User({ name: "john", age: 25 });
// user
//   .save()
//   .then(() => console.log("User Saved"))
//   .catch((err) => console.log(err));
//using async function run

run();
async function run() {
  try {
    const user = await User.findOne({ name: "john" });
    console.log(user);
    user.sayHi();
    // const user = await User.where({ name: "john" }).updateOne({ age: 26 });
    // const user = await User.where('age').gt(25).lt(30);
    // const user = await User.where('age').gt(25).lt(30).limit(2);
    // const user = await User.where('age').gt(25).where('name').equals('john');
    // const user = await User.where('age').gt(25).where('name').equals('john').select('email');

    // const user = await User.create({
    //   name: "david",
    //   age: 26,
    //   email: "xyz@example.com",
    //   hobbies: ["singing", "dancing"],
    //   address: {
    //     street: "abc",
    //     city: "def",
    //   },
    //   accountCreated: new Date(),
    // });
    // console.log(`User Saved" ${user}`);
  } catch (err) {
    console.log(`error ${err.message}`);
  }
}
