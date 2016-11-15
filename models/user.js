var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
	login: {
		type: String,
		index: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

var Users = module.exports = mongoose.model('USERS', usersSchema);

module.exports.getUsers = function(callback) {
	Users.find(callback);
}

module.exports.getUserById = function(id, callback) {
	Users.findById(id, callback);
}

module.exports.getUserByLogin = function(login, callback) {
	var query = {login: login};
	Users.find(query, callback);
}