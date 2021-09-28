const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/step1', (req, res) => {
  res.render('step1');
});

app.get('/step2', (req, res) => {
  res.render('step2');
});

app.get('/step3', (req, res) => {
  res.render('step3');
});

app.get('/step4', (req, res) => {
  res.render('step4');
});

app.get('/step5', (req, res) => {
  res.render('step5');
}); 

app.get('/step6', (req, res) => {
  res.render('step6');
});

app.get('/step7', (req, res) => {
  res.render('step7');
}); 

app.get('/step8', (req, res) => {
  res.render('step8');
});


// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404).send('<p>Error 404</p>');
});

module.exports = app;

