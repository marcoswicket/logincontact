var mongoose = require('mongoose');

var contactsSchema = mongoose.Schema({
	login: {
		type: String,
		required: true,
		index: true
	},
	password: {
		type: String,
		required: true,
		index: true
	},
	name: {
		type: String,
		index: true,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	telephone: {
		type: Number
	},
	address: {
		type: String
	}

});

var Contacts = module.exports = mongoose.model('Contacts', contactsSchema);

module.exports.getContacts = function(callback) {
	Contacts.find(callback);
}

module.exports.getContactById = function(id, callback) {
	Contacts.findById(id, callback);
}

module.exports.getContactByName = function(name, callback) {
	var query = {name: name};
	Contacts.find(query, callback);
}

module.exports.createContact = function(newContact, callback) {
	newContact.save(callback);
}

module.exports.updateContact = function(id, data, callback) {
	var name 			= data.name;
	var email 			= data.email;
	var telephone 		= data.telephone;
	var address 		= data.address;

	var query = {_id: id};

	Contacts.findById(id, function(err, contact){
		if(!contact) {
			return next(new Error('Could not find contact'));
		} else {
			contact.name 		= name;
			contact.email 		= email;
			contact.telephone 	= telephone;
			contact.address 	= address;

			contact.save(callback);
		}
	});
}

module.exports.removeContact = function(id, callback) {
	console.log("ID: " + id);
	Contacts.find({_id: id}).remove().exec();
}