var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({

	username:{
     type: String,
     unique: true,
     required: true
	},

	password:{
		type: String,
		required: true
	},

	admin:{
		type:Boolean,
		default: false
	}

});

var Users = mongoose.model('User',User);
module.exports = Users;