const { Schema, model } = require('mongoose');

const ourFriendSchema = Schema({
title: { type: String } ,
url: { type: String },
addressUrl:{ type: String },
imageUrl:{ type: String },
address:{ type: String },
phone: { type: String },
email: { type: Number},
workDays: {type: Array}
})


// create a model
const OurFriend = model("our_friend", ourFriendSchema);

module.exports = OurFriend;