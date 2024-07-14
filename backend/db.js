const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema= mongoose.Schema({
    userNAme:String,
    password:String,
    firstNAme:String,
    lastName:String,
})

const User= mongoose.model("User",userSchema);

module.exports= {
    User
}