var express = require('express');
var app = express();

app.use(express.json())
const CarroceriaRoute = require('./route/carroceria-route');

app.use('/api/carrocerias', CarroceriaRoute);

app.listen(3000, () => console.log('Listening on port 3000') );