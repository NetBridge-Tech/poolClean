const express = require('express');
const app = express();
const routes = require('./Routes/routes');
const session = require('express-session')
const flash = require('connect-flash')

app.use (express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(routes);
//sessao
app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized:true,
}))

app.use(flash())

//middleware
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

app.listen(8080);