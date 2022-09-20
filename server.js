const express = require('express'); 
const fs = require('fs'); 
const apiroutes = require('./routes/apiroutes.js'); 
const path = require('path');

const app = express(); 


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiroutes); 
//this line will allow me to all of the files in the public folder 
app.use(express.static('public')); 

//GET route for homepage 
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html')));

//GET route for Notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, 'notes.html')));


app.listen(3002, () => console.log('App running on http://localhost:3002/'))