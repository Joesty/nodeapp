var express = require('express');
var pg = require("pg");
var conString = "postgres://joesty:i4xq7e21@127.0.0.1:5432/test";
var client = new pg.Client(conString);
client.connect();
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/myaction', function(req, res) {
	  res.send('You sent the name "' + req.body.name + '" and job "' + req.body.descr +'".');
	  client.query("insert into users (name, descr) values ('" + req.body.name + "', '"+ req.body.descr +"');")
});
app.post('/delete', function(req, res) {
	          res.send('You sent the name "' + req.body.name + '" and job "' + req.body.descr +'".');
	          client.query("delete from users where name = '" + req.body.name + "';")
});

app.listen(3000, function() {
	  console.log('Server running on port 3000');
});
