const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blog');

const app = express();

//connect to database
var mongoDB = 'mongodb+srv://athi:athi2021@cluster0.ious3.mongodb.net/Vaccination_Registration_Portal?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//mongo db link 
DELETE THIS
/*const dbURI = 'mongodb+srv://athi:athi2021@cluster0.ious3.mongodb.net/Vaccination Registration Portal?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log("Connecting to MongoDB err")); */

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'testing01',
    name: 'Basic Test',
    age: '1'
  }); 

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
}); 


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

