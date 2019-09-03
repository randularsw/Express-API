const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

app.get('/', (req, res) => {
    res.send('Home');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log('Connected to DB');
});

app.listen(3000);
