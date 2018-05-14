const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 3030; 


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname });

});

app.post('/', (req, res) => {
  const name = req.body.name; 
  const email = req.body.email;
  const data = {
    name: name, 
    email: email
  }
  axios.post('https://forms-487c6.firebaseio.com/users.json', data)
    .then((response) => console.log(`User Sent: Name is ${data.name} and email is ${data.email}`));
  res.redirect('/');
});

app.listen( PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
});
