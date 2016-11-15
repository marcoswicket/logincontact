var express = require('express');
var router = express.Router();

var Users = require('../models/user');

router.get('/', function(req, res, next) {
	Users.getUsers(function(err, users) {
		if(err) {
			console.log('Error happened getting users: ' + err);
		}
		res.json(users);
	})
});

module.exports = router;
