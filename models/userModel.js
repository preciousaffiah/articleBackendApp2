// arthor: Precious Affiah 2022
// this is the schema for the user(how users the data will be displayed in the datbase)
const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {

        name:"String",
        email:"String",
        password:"String",

    },
    {timestamps: true}
);

const user = mongoose.model('user', schema);
module.exports = user;