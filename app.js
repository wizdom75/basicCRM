require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const sequelize = require('./dbconnect');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB Connection
require("./dbconnect");

app.get('/', (req, res)=>{
    sequelize
    res.json({'message':'Hello World!!'});
});


// Cases routes
//Get all cases
app.get('/cases', (req, res)=>{
    res.json({'cases': [{'case':'case'},{'case':'caase2'},{'case':'case3'}]});
});
//Save new case
app.post('/cases', (req, res)=>{
    res.json({'saved':'This user has been saved'});
});
//Show one case
app.get('/cases/:id', (req, res)=>{
    res.json({'case':'case1'});
});
//Update one user
app.put('/cases/:id', (req, res)=>{
    res.json({'case':'case1'});
});
//Delete a user
app.delete('/cases/:id', (req, res)=>{
    res.json({'case':'case1'});
});

// Clients routes
//Get all clients
app.get('/clients', (req, res)=>{
    res.json({'clients': [{'client':'client1'},{'client':'client2'},{'client':'client3'}]});
});
//Save new client
app.post('/clients', (req, res)=>{
    res.json({'saved':'This client has been saved'});
});
//Show one client
app.get('/clients/:id', (req, res)=>{
    res.json({'client':'client1'});
});
//Update one client
app.put('/clients/:id', (req, res)=>{
    res.json({'client':'client1'});
});
//Delete a client
app.delete('/clients/:id', (req, res)=>{
    res.json({'client':'client1'});
});

// Payments routes
//Get all payments
app.get('/payments', (req, res)=>{
    res.json({'payments': [{'payment':'paymnent1'},{'payment':'payment2'},{'payment':'payment3'}]});
});
//Save new payment
app.post('/payments', (req, res)=>{
    res.json({'saved':'This payment has been saved'});
});
//Show one payment
app.get('/payments/:id', (req, res)=>{
    res.json({'payment':'paymnent1'});
});
//Update one payment
app.put('/payments/:id', (req, res)=>{
    res.json({'payment':'paymnent1'});
});
//Delete a payment
app.delete('/payments/:id', (req, res)=>{
    res.json({'payment':'paymnent1'});
});

// Quotes routes
//Get all quotes
app.get('/quotes', (req, res)=>{
    res.json({'quotes': [{'quote':'quote1'},{'quote':'quote2'},{'quote':'quote3'}]});
});
//Save new quote
app.post('/quotes', (req, res)=>{
    res.json({'saved':'This quote has been saved'});
});
//Show one quote
app.get('/quotes/:id', (req, res)=>{
    res.json({'quote':'quote1'});
});
//Update one quote
app.put('/quotes/:id', (req, res)=>{
    res.json({'quote':'quote1'});
});
//Delete a quote
app.delete('/quotes/:id', (req, res)=>{
    res.json({'quote':'quote1'});
});


// Sources routes
//Get all sources
app.get('/sources', (req, res)=>{
    res.json({'sources': [{'source':'source1'},{'source':'source2'},{'source':'source3'}]});
});
//Save new source
app.post('/sources', (req, res)=>{
    res.json({'saved':'This source has been saved'});
});
//Show one source
app.get('/sources/:id', (req, res)=>{
    res.json({'source':'source1'});
});
//Update one source
app.put('/sources/:id', (req, res)=>{
    res.json({'source':'source1'});
});
//Delete a source
app.delete('/sources/:id', (req, res)=>{
    res.json({'source':'source1'});
});


/**
 * Users routes
 *  * */ 
//Get all users
app.get('/users', (req, res)=>{
    res.json({'users': [{'user':'user1'},{'user':'user2'},{'user':'user3'}]});
});
//Save new user
app.post('/users', (req, res)=>{
    res.json({'saved':'This user has been saved'});
});
//Show one user
app.get('/users/:id', (req, res)=>{
    res.json({'user':'user1'});
});
//Update one user
app.put('/users/:id', (req, res)=>{
    res.json({'user':'user1'});
});
//Delete a user
app.delete('/users/:id', (req, res)=>{
    res.json({'user':'user1'});
});

/**
 * Welcome Packs routes
 *  * */ 
//Get all wpacks
app.get('/wpacks', (req, res)=>{
    res.json({'wpacks': [{'wpack':'wpack1'},{'wpack':'wpack2'},{'wpack':'wpack3'}]});
});
//Save new wpack
app.post('/wpacks', (req, res)=>{
    res.json({'saved':'This wpack has been saved'});
});
//Show one wpack
app.get('/wpacks/:id', (req, res)=>{
    res.json({'wpack':'wpack1'});
});
//Update one wpack
app.put('/wpacks/:id', (req, res)=>{
    res.json({'wpack':'wpack1'});
});
//Delete a wpack
app.delete('/wpacks/:id', (req, res)=>{
    res.json({'wpack':'wpack1'});
});

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}`)
});