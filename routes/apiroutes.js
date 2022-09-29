const router = require('express').Router();
const fs = require('fs');
const notes = require('../db/db.json');
const path = require('path');

//recieving the notes 
router.get('/notes', (req, res) => {
    res.json(notes);
});

//sending back the notes 
router.post('/notes', (req, res) => {

    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            res.status(500).end();
        }
        notes.push(req.body);
    
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });
    }); 
})

// router.delete('/notes/:id', (req, res)=> {
//     res.send(req.params); 
//     const noteId = req.params.id; 

//     fs.readFile(path.join(__dirname, '../db/db.json'), (err, notes) => {
//         if (err) {
//             res.status(500).end();
//         }
//         notes.forEach(note => {
//             if (noteId == note.id){
              
//             }
//         });
    
//         fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
//             if (err) {
//                 res.status(500).end();
//             } else {
//                 res.status(200).end();
//             }
//         });
//     }); 

// })
module.exports = router; 
