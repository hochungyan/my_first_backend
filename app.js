const { getRandomSongs } = require('./my_random_songs');
const express = require('express')
const app = express()
const port =8080


app.get('/', (req,res)=>{
    console.log("From the /");
    res.send(getRandomSongs());
})
app.listen(port,()=>
{
    console.log("Server started " +port);
})
app.get('/birth_date', (req, res) => {
    res.send("December 12, 1915");
});

app.get('/birth_city', (req, res) => {
    res.send("Hoboken, New Jersey");
});

app.get('/wives', (req, res) => {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
});

app.get('/picture', (req, res) => {
    res.redirect("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg");
});

app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).send('Not authorized');
        return;
    }

    const encodedCredentials = authHeader.split(' ')[1];
    const [username, password] = Buffer.from(encodedCredentials, 'base64').toString('utf8').split(':');

    if (username === 'admin' && password === 'admin') {
        res.send("Welcome, authenticated client");
    } else {
        res.status(401).send('Not authorized');
    }
});