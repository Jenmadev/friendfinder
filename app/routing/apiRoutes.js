
var express = require('express');
var router = express.Router();
var path = require('path');
var database = require('../data/friends.js');

router.route("/friends") 
  .get(function(req, res) {
      res.sendFile(path.join(__dirname, "../data/friends.js"));
    })

  .post(function(req, res) {
      checker(req.body,res);

  });

function checker(data,res){
  var user = data.scores;
  var results = [];
  // console.log("USER " + user);
 for(var i = 0; i < database.length;i++){
  //  console.log("DATABASE " + database[i].scores);
   var count = 0;
   for(var j = 0; j < database[i].scores.length; j++){
  //variables
    var a = user[j];
    var b = database[i].scores[j];
    var differences = difference(a,b);
    // console.log("User A " + a);
    // console.log("User B " + b);
    // console.log("___________");
    // console.log(differences)
    count+=differences;
    if(j == 9){
      var userData = {
        id: i,
        value: count
      };
      // console.log(userData);
      results.push(userData);
      // console.log("Total Differences" + results);
    }
   }

 }
  // sort by value
  var orderedResults = results.sort(function (a, b) {
    return a.value - b.value;
    });
  // console.log(orderedResults);
  // console.log(orderedResults[0].id);
    var resultId = orderedResults[0].id;
    // console.log(database[resultId].name);
  //Posting to the Modal
  res.json(database[resultId]);
}

function difference (a,b){
  return Math.abs(a-b);
}

module.exports = router;