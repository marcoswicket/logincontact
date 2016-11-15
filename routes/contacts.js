var express = require('express');
var router = express.Router();

var Contacts = require('../models/contact');

router.get('/', function(req, res, next) {
	Contacts.getContacts(function(err, contacts) {
		if(err) {
			console.log('Error ocurred when getting contacts: ' + err);
		}
		res.json(contacts);
	})
});

router.get('/:id', function(req, res, next) {
	Contacts.getContactById(req.params.id, function(err, contact){
		if(err) {
			console.log('Could not get contact by id: ' +err);
		}
		res.json(contact);
	});
});

router.post('/', function(req, res, next){
	//get value from forms
	var login = req.body.login;
	var password = req.body.password;
	var name = req.body.name;
	var email = req.body.email;
	var telephone = req.body.telephone;
	var address = req.body.address;

	//contact object
	var newContact = new Contacts ({
		login: login,
		password: password,
		name: name,
		email: email,
		telephone: telephone,
		address: address
	});

	Contacts.createContact(newContact, function(err, contact){
		if(err) {
			console.log(err);
		}

		res.location('/contacts');
		res.redirect('/contacts');

	});
});

router.put('/', function(req, res, next){
	//get value from forms
	var id = req.body.id;
	var data = {
		name: req.body.name,
		email: req.body.email,
		telephone: req.body.telephone,
		address: req.body.address
	}

	Contacts.updateContact(id, data, function(err, contact){
		if(err) {
			console.log(err);
		}

		res.location('/contacts');
		res.redirect('/contacts');
	});
});

router.delete('/:id', function(req, res, next){
	var id = req.params.id;
	Contacts.removeContact(id, function(err, contact){
		if(err) {
			console.log(err);
		}

		req.location('/contacts');
		req.redirect('/contacts');
	});
});

module.exports = router;
