const express = require('express');


const app1express = express();

app1express.get('/',function(req,res){
   res.send("Hello World!!!");
})

app1express.get('/alien',function(req,res){
    const id = req.query.id


    res.send('Welcome Back Aliens!!!'+id)
})

app1express.get('/alien/:id',function(req,res){
    const id = req.params.id
    res.send('Hey Pratiksha!!' +id)
})


app1express.listen(9000,function(req,res){
    console.log('Running..');
});