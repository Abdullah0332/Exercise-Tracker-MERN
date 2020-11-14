const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();
const URI = process.env.MONGO_URI

app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);

mongoose.connect(   
   URI
).then(result=>{
    app.listen(port)
    console.log(`Server is Running on PORT ${port}`)
})
.catch(err=>{console.log(err)})