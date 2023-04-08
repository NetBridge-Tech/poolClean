const express = require('express');
const app = express();
const routes = require('./Routes/routes');


app.use (express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(routes);


app.listen(8080);