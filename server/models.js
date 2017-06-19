const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


mongoose.Promise = global.Promise;





// this is used for SkyHigh users loging In 

const userskySchema = mongoose.Schema({
  email:String,
  password:String,
})

userskySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    email: this.email 
  };
}


userskySchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

userskySchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 12);
}


const Usersky = mongoose.model('Usersky',userskySchema);



module.exports = {Usersky};
