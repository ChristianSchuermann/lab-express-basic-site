const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/biography', (req, res) => {
    res.sendFile(__dirname + '/views/biography.html');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})

/* app.get('/', (req, res)=>{
    res.send("homepage connected");
}); */