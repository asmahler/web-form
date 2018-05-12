const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3030; 


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname });

});

app.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen( PORT, () => {
  console.log(`Application running on localhost:${PORT}`);
});
