var express = require('express');
var app = express();
var str;
app.get('/', function(req, res){
  str=req.query.rater;
});
var resp;
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/database";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err; 
  var dbase = db.db("database"); //here
  var query = {"raters" : /.*str.*/i}; 
  dbase.collection("book").findone(query).toArray(function(err, result) {  
    if (err) throw err;  
    resp=result;
	console.log(result);  
    db.close();  
  });  
}); 
var status_variable=if(resp);
app.get('/:id', function(req, res){
res.json({status:status_variab,rating:resp.rating,booklist:book});
});
app.listen(3000);