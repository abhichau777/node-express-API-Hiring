var express = require('express');
var app = express();
var str;
app.get('/', function(req, res){
  var new_rate=req.query.rate;
  var new_rater=req.query.username;
});
var resp;
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/database";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err; 
  var dbase = db.db("database"); //here  
  var newvalues = { $set: {rating: (rating*ratersNumber+rate)/(ratersNumber+1) },{ratersNumber:raterNumber+1}  };
  var dbase = db.db("database");
  dbase.collection("book").update({}, newvalues, function(err, res) {
    if (err) throw err;
	resp=result;
    console.log("1 document updated");
    db.close();
  });
}); 
var status_variable=if(resp);
app.get('/:id', function(req, res){
res.json({status:status_variab);
});
app.listen(3000);