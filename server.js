const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"creative_blog"
})

con.connect(function(err) {
    if(err) throw err;
    console.log("connected");
})

app.get('/',function (req,res)  {
    // console.log(__dirname);
    res.sendFile(path.join(__dirname + "/public/frontpage.html"));
   // res.send("done");
})

app.get('/login',function(req,res) {
    res.sendFile(path.join(__dirname + "/public/login/login.html"));
    // res.send("login paage");
})

app.post('/login_post',function(req,res) {
    // console.log(req.params);
    console.log(req.body);
    res.send("Post succesfuly")
})

app.post('/Register_post',function(req,res) {
    // console.log(req.params);
    const { register_name , register_email,register_pass} = req.body;
    var data={NAME:register_name,Email:register_email,PASSWORD:register_pass};

    var sql = "INSERT INTO USERS SET ?"; 
    con.query(sql,data,function(err,result) {
        if(err) throw err;
        console.log("1 record inserted");
    })   
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