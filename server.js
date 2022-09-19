const express = require('express'); 
const fs = require('fs'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//this line will allow me to all of the files in the public folder 
app.use(express.static('public')); 

//building a request handler for the notes 
app.get('/api/notes', (req, res) => {
    const notes = require('./Develop/db/db.json'); 
//sending back the notes 
    res.status(200).json(notes); 
})

app.post('/api/notes', (req, res) => {
    const notes = ('./Develop/db/db.json'); 

    const { noteTitle, noteText } = req.body; 
    console.log(noteText, noteTitle); 

   fs.writeFile('./Develop/db/db.json', JSON.stringify(notes), (err) => {
    if(err) {
        res.status(500).end(); 
    }else {
        res.status(200).end(); 
    }
   })

   res.end(); 
})

app.listen(3001, () => console.log('App running on http://localhost:3001/'))