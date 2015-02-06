var data = require("../data.json");

exports.addFriend = function(req, res) { 
	console.log("foo") 
	res.render('add');

	console.log(req.query.name)
	var newFriend = {
	"name": req.query.name,
	"description": req.query.description,
	"imageURL": "http://lorempixel.com/400/400/people"
	}  

	data["friends"].push(newFriend);
	// Your code goes here
 };