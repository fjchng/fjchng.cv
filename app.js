const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

var data = fs.readFileSync("data.json");
var jsonData = JSON.parse(data);

app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.use((req,res,next) => {
	next();
});


app.get('/', (req, res) => {
	res.render('index.hbs', jsonData);
});
console.log(jsonData);

app.listen(port,() => {
	console.log(`Server is up on port ${port}.`);
});