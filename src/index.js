const path = require('node:path');

//import express
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res, next) => {
    res.render('help', {
        helpMessage: 'This is a help message'
    })
});


app.get('/about', (req, res, next) => {
    res.render('about', {
        name: "Andrew"
    })
})



app.get('/weather', (req, res, next) => {
    res.send({ forcast: "it is cloudy", temperature: "20.5 C", location: "Bangalore" })
});

app.get('', (req, res, next) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jilu Elizebeth'
    })
});

app.listen(3000, () => {
    console.log('Listen to port number 3000')
});