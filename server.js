const express = require('express');
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.get('/',function (req,res)  {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/public/frontpage.html"));
   // res.send("done");
})

app.get('/login',function(req,res) {
    res.sendFile(path.join(__dirname + "/public/login/login.html"));
    // res.send("login paage");
})

app.post('/loginsubmit',function(req,res) {
    // console.log(req.params);
    console.log(req.body);
    res.send("Post succesfuly")
})
app.get('/:any' , function(req,res) {
    console.log(req.params.any);
    res.send("Not listed");
})


app.listen(8080,() => {
    console.log("app started on port 8080");
})