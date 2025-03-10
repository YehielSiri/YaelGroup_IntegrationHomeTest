const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;


app.get(`${api}/hebrewdate`, (req, res) =>{
    var gregdate = new Date(req.query.date);
    var hebdate = gregdate.toLocaleString('he-u-ca-hebrew');
    
    // Version 1.0 - using JS libraries:
   // res.send('Gregorian date: '+ req.query.date + '\nHebrew calendar date: ' + hebdate);
    /*Output Example:
    *    Gregorian date: 2024-11-12
    *    Hebrew calendar date: 11 בחשוון 5785, 2:00:00
    */

    // Version 1.1 - using hebcal service from YaelGroup:
    // 1.1.0 using fetch
    let fetchRes = fetch("https://www.hebcal.com/converter?cfg=json&date="+req.query.date+"&g2h=1&strict=1")
    fetchRes.then(response=>{
        if(!response.ok)
         throw new Error("Network response is not ok");
        return response.json();
    }).then(d=>{res.send(d.hebrew)})
    .catch((error)=>console.error("Error in Fetch: ",error))   
    /*Output Example:
    *    י״א בְּחֶשְׁוָן תשפ״ה
    */

    })

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3000');
})