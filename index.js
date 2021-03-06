const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port =8000;
const db=require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware=require('node-sass-middleware');

app.use(
    sassMiddleware({
        src:'./assets/scss',
        dest:'./assets/css',
        debug:true,
        outputStyle:'expanded',
        prefix:'/css'
    })
)
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setting different fields for the created express app
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'mernSocial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//middleware directing requesst to routes folder
app.use('/', require('./routes'));

//directing the app to the port(port is a kind of channel) through/on which it will work
app.listen(port,function(err){
    if(err){
        console.log(`error in running server: ${err}`);
    }
    return console.log(`server running on : ${port}`);
})