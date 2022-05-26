const express = require('express');
const path = require('path');
const app = express();

// port & server
const port = 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use(express.urlencoded({extended:false}));

// static
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post('/datos', (req, res) => {
    res.send(req.body);
});