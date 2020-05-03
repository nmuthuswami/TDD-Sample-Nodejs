/* this class defines express & URL routing  */
const express = require('express');
const bodyparser = require('body-parser');

const indexRouter = require('../routers/index');
const readApiRouter = require('../routers/readapi');
const writeApiRouter = require('../routers/writeapi');

const server = new express();

server.use(bodyparser.urlencoded({extended:false}));
server.use(bodyparser.json());

server.use('/', indexRouter);
server.use('/api', readApiRouter);
server.use('/api', writeApiRouter);

server.use((req,res,next)=>{
    res.status(404).send("API Url not found")
});

server.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});

module.exports = server;