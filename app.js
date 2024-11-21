const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;


app.get(`${api}/hebrewdate`, (req, res) =>{
    var gregdate = new Date(req.query.date);
    var hebdate = gregdate.toLocaleString('he-u-ca-hebrew');
    res.send(console.log('Gregorian date: '+ req.query.date + '\nHebrew calendar date: ' + hebdate));
})

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3000');
})