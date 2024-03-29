// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/whaddya2",
	{ useNewUrlParser: true }
);

const userSeed = [
	{
		username: "jenna",
		email: "user@email.com",
		friendsList: [{
			friendId: "5eb6f0d63fa4b82bb3373e05",
			friendName: "jennifer"
		}]
	},
	{
		username: "jennifer",
		email: "user2@email.com",
		friendsList: [{
			friendId: "5eb6f0d63fa4b82bb3373e04",
			friendName: "jenna"
		}]
	}
];

db.User.remove({})
	.then(() => db.User.create(userSeed))
	.then((data) => {
		console.log(data.result + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
