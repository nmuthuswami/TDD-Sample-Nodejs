/* This class holds routing for write api - which writes data into redis database. */

const express = require('express');
const redis = require('redis');

const router = express.Router();

//create connection to redis server (localhost server & default port)
const client = redis.createClient({
    port : 6379,
    host : '127.0.0.1'
});

//set the specified key & value to redis and respond with insertion status
const setcontent = (reqKey, reqValue, res)=> {
    client.set(reqKey, reqValue, (err, value)=>{
        if(err) {
            console.error(err);
            throw err;
        }
        else{
            // console.log(value);
            res.json({"text":value});
        }
    });
}

//post api - to write file contents into redis db
router.post('/writecontent',(req,res)=>{
    var objBody = Object.keys(req.body);
    setcontent(objBody[0], req.body[objBody[0]], res);  
});

module.exports = router;


