const path = require('node:path');

//import express
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

/* app.get('/help', (req, res, next) => {
    res.send(`<h1>Help Page</h1>`)
}); */

app.get('/weather',(req, res, next)=>{
    res.send({forcast: "it is cloudy",temperature: "20.5 C",location: "Bangalore"})
});

/* app.get('/', (req, res, next) => {
    res.send("Hello from express js")
}); */

app.listen(3000, () => {
    console.log('Listen to port number 3000')
});