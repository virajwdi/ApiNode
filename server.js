const express = require('express');
const bodyParser = require('body-parser');
const placeRoutes = require('./routes/place-routes');
const app = express();

app.use('/api/places', placeRoutes);
app.use((error, req, res, next) => {
    
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code||500)
    .json({message:error.message||"An unknown error occured."})
})
app.listen(5000);
