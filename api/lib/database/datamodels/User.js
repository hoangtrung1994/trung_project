const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    username:{
        type: String
    },
    password:{
        type: String,
        require: true
    }
})

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(undefined, isMatch);
    });
};

module.exports = exports.default = User = mongoose.model('User', UserSchema);
