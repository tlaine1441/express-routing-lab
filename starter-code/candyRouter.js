var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{
		"id":1,
		"name":"Chewing Gum",
		"color":"Red"
	}
	,
	{
		"id":2,
		"name":"Pez",
		"color":"Green"
	},
	{
		"id":3,
		"name":"Marshmallow",
		"color":"Pink"
	},
	{
		"id":4,
		"name":"Candy Stick",
		"color":"Blue"
	}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

router.get('/:id', function(req,res) {
	candies.forEach(function(candy) {
		if (candy == null) {
			res.send({"message": "candy doesnt exist"});
		} else if (req.params.id == candy.id){
			res.json(candy);
		}
	})
});

router.post('/', function(req, res) {
	candies.push(req.body);
	res.json(req.body);
});

router.put('/:id', function(req,res) {
	candies.forEach(function(candy) {
		if (req.params.id == candy.id){
			candy.name = req.body.name;
			candy.color = req.body.color;
			res.send(candy);
		}
	})
});

router.delete('/:id', function(req,res){
	candies.forEach(function(candy, index) {
		if (req.params.id == candy.id) {
			candies[index] = null;
			res.send({"message": "deleted"});
		}
	})
});
// Fill out the rest of the routes here

module.exports = router;