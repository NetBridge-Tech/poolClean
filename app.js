const express = require('express');
const app = express();
const routes = require('./Routes/routes');
const handlebars = require('express-handlebars')
const session = require('express-session');


app.use(session({
  secret: 'fdflndklnfsd082032',
  resave: false,
  saveUninitialized: false
}));
  

app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
    runtimeOptions:{
        allowPromoMethodsByDefault:true,
        allowProtoPropertiesByDefault:true
    }
}))
app.set('view engine', 'handlebars')
app.set('views', './views')


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(routes);


app.listen(3000);