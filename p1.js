var express = require('express');
var app = express();
var str;
app.get('/', function(req, res){
  str=req.query.name;
});
var resp;
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/database";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err; 
  var dbase = db.db("database"); //here
  var query = { name: str }; 
  dbase.collection("book").find(query).toArray(function(err, result) {  
    if (err) throw err;  
    resp=result;
	console.log(result);  
    db.close();  
  });  
}); 
var status_variable=if(resp);
app.get('/:id', function(req, res){
res.json({status:status_variab,details:resp});
});
app.listen(3000);