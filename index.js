const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port =8000;
const db=require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


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