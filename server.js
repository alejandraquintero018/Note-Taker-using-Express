const express = require('express'); 
const fs = require('fs'); 
const apiroutes = require('./routes/apiroutes.js'); 
const htmlRoutes = require('./routes/htmlRoutes.js'); 
const path = require('path');

const app = express(); 

const PORT = process.env.PORT || 3001

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
//this line will allow me to use all of the files in the public folder 
app.use(express.static('public'));
app.use('/api', apiroutes); 
app.use("/", htmlRoutes); 

// app.get(apiroutes, (req, res) =>{
//     res.status(200).json(`${req.method} request recieved `); 
// })

//app.listen(3002, () => console.log('App running on http://localhost:3002/'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  