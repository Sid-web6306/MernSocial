const express=require('express');
const app=express();
const port =8000;

//middleware directing requesst to routes folder
app.use('/', require('./routes'));

//setting different fields for the created express app
app.set('view engine','ejs');
app.set('views','./views');

//directing the app to the port(port is a kind of channel) through/on which it will work
app.listen(port,function(err){
    if(err){
        console.log(`error in running server: ${err}`);
    }
    return console.log(`server running on : ${port}`);
})