module.exports= function(app){

    var friends = require("../data/friends"). 
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("*", function (req, res){
        var friend-match= req.body
        res.json(friend-match);
    }); 
};