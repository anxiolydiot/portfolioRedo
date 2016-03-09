var express = require('express');
var bodyParser = require('body-parser');
var connect = require('connect');
var session = require('express-session');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));


app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/images", express.static("public/images"));

app.get('/',function(req,res){
  res.sendfile(process.cwd()+"/routes/about_me.html");
});

app.listen (PORT, function(){
  console.log('Listening on port %s', PORT);
});
