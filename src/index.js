const path = require('node:path');

//import express
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));



app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jilu Elizebeth'
    })
});

app.get('/help', (req, res, next) => {
    res.render('help', {
        title: "Help",
        name: "Jilu",
        helpMessage: 'This is a help message'
    })
});


app.get('/about', (req, res, next) => {
    res.render('about', {
        title: "About",
        name: "Andrew"
    })
});


app.get('/weather', (req, res, next) => {
    res.send({
        forcast: "it is cloudy",
        temperature: "20.5 C",
        location: "Bangalore"
    });
});

app.get('/help/{*splat}', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Jilu Elizebeth',
        errorMessage: 'Help article not found'
    });
});

app.get('/{*splat}', (req, res) => {
    res.render('404',{
        title: 404,
        name: 'Jilu Elizebeth',
        errorMessage: 'Page Not Found'
    });
});


app.listen(3000, () => {
    console.log('Listen to port number 3000')
});