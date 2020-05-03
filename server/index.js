/* start up class to this node js application */ 
const app = require('./server');

const port = parseInt(process.env.port || '3000', 10);

app.set('port', port);

//server listening to port: 3000
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});