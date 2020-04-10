
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const api = require('./api');//bring the backend func and feature

const PORT = 4000;
// const db = 'mongodb://localhost:27017';

// //connect to db
// mongoose.connect(db, err => {
//     if (err) {
//         console.error('Error!' + err)
//     } else {
//         console.log('Connected to mongodb');
//     }
// });
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);//api 경로에서 항상 require("./api") 호출한다. use : middleware 함수.

//root dir
app.get('/', function(req, res) {
    res.send('Hello from server');
})

//server listen with no time interval?
app.listen(PORT, function(){
    console.log('Express server running on port '+ PORT)});