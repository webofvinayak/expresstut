const express = require('express');
var bodyParser = require('body-parser');



var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use(express.static("public"));

var abc = 100;

app.get('/home',function(req,res){

   res.render('home', {abc:abc});

});

app.post("/home",function(req,res){

 if(req.body.intext === "vinayak"){
   abcd=1000;
   res.render('home',{abc:abcd});
 }

});


app.get('/',function(req,res){

res.send("Hello World");

});

app.listen(3000);
