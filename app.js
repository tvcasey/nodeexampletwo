const express = require('express');
const app = express();

//Middleware
//app.use('/posts', () => {
//    console.log('Middleware in action!!');
//});

app.get('/', (req, res) => {
    res.send('We are on home');
});

app.post('/', (req, res) => {
    res.send('POSTS!!');
});


app.listen(3000);