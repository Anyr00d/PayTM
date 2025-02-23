const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/';

mongoose.connect(uri);

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
  },
  password: {
    type:String,
    required:true,
    trim:true,
  },
  firstName: {
    type:String,
    required:true,
    trim:true,
  },
  lastName: {
    type:String,
    required:true,
    trim:true,
  }
})

const accountSchema=new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  balance:{
    type:Number,
    required:true
  }
})

const User=mongoose.model('User',userSchema);
const Account=mongoose.model('Account',accountSchema);

module.exports= {
  User,
  Account
}
