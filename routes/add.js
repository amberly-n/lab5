var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
    console.log("addfriend called");

    //looking for paramters
    var name = req.query.name;
    var description = req.query.description;

    console.log(name);
    console.log(description);

    var newFriend = {
        name: name,
        description: description,
        imageURL: "http://lorempixel.com/400/400/people"
    }

    data.friends.push(newFriend);

    //take you back to index route
    res.redirect('/');
 }