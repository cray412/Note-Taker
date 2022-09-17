const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');


const  app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, ()=> console.log(`Listening to server on ${PORT}`));