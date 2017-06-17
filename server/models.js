const mongoose = require('mongoose');





// this is used for SkyHigh users loging In 

const userskySchema = mongoose.Schema({
  name:String,
  email:String,
})

userskySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    email: this.email 
  };
}





const Usersky = mongoose.model('Usersky',userskySchema);



module.exports = {Usersky};
