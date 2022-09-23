const router = require('express').Router(); 
const fs = require('fs'); 
const notes = require('../db/db.json'); 

//recieving the notes 
router.get('/notes', (req, res) => {
    res.status(200).json(notes); 
})

//sending back the notes 
router.post('/notes', (req, res) => {
    const notes = ('../db/db.json'); 

    const { title, text } = req.body; 
    console.log(text, title); 

    fs.readFile('../db/db.json', (err, data)=> {
        if (err) {
            console.log(err); 
        }
        notes.push(req.body); 
   
   fs.writeFile('../db/db.json', JSON.stringify(notes), (err) => {
    if(err) {
        res.status(500).end(); 
    }else {
        res.status(200).end(); 
    }
   });
}); 
})

module.exports = router; 
