var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = require("./data");

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
	//res.sendFile(__dirname + "/views/index.html")
});

router.get('/:id', function(req,res) {
	candies.forEach(function(candy) {
		if (req.params.id == candy.id){
			res.json(candy);
		} else if (candy == null) {
			res.send({"message": "candy doesnt exist"});
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
			res.json(candy);
		}
	})
});

router.delete('/:id', function(req,res){
	candies.forEach(function(candy, index) {
		if (req.params.id == candy.id) {
			candies[index] = null;
			res.json({"message": "deleted"});
		}
	})
});
// Fill out the rest of the routes here

module.exports = router;