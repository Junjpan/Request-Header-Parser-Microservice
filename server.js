// app.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser=require('body-parser');



// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(bodyParser.json());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req,res)=>{
  var ip=req.connection.remoteAddress;
  // ip=ip.split(':')[3]; this way, you can get the normal IP address which is 127.0.0.1.you also can do ip=req.id I think,
  var language=req.headers['accept-language'];
  var software=req.headers['user-agent'];

  res.json({
    'IPaddress':ip,
    "Langueage":language,
    "Software":software
  })
})


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



/**  listen for requests process.env.PORT in node.js mean whatever is in the enviroment variable PORT
var listener = app.listen(process.env.PORT, function () {
console.log('Your app is listening on port ' + listener.address().port);
});**/

var listener=app.listen(3000,function(){
  console.log('Your app is listening on port 3000');
})
