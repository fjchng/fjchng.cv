const express = require('express');
const hbs = require('hbs');
const path = require('path');

const content = require('./content.js');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

// app.use(express.static(path.join(__dirname + 'vendor')));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.use((req,res,next) => {
	next();
});

console.log(content.content);

app.get('/', (req, res) => {
	res.render('index.hbs', content.content);
});

app.listen(port,() => {
	console.log(`Server is up on port ${port}.`);
});