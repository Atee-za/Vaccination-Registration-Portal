const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const Blog2 = require('./models/Personal');
const Blog3 = require('./models/Contact');
const Blog4 = require('./models/Address');
const Blog5 = require('./models/Appointment');
const Blog7 = require('./models/Medical_Aid');

const app = express();

//connect to database
var mongoDB = 'mongodb+srv://athi:athi2021@cluster0.ious3.mongodb.net/Vaccination_Registration_Portal?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



  app.set('view engine', 'ejs');

  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

//landing page
app.get('/', (req, res) => {
  res.render('index');
}); 

app.post('/input0', (req, res) => {
  const ansB = new Blog(req.body);

  ansB.save()
    .then((result) =>{
      res.redirect('/step1')
    })
})

//step 1 page
app.get('/step1', (req, res) => {
  res.render('step1');
});

app.post('/input1', (req, res) => {
  res.redirect('/step2');
})

//step 2 page
app.get('/step2', (req, res) => {
  res.render('step2');
});

app.post('/input2', (req, res) => {
  const pInfo = new Blog2(req.body);

  pInfo.save()
    .then((result) =>{
      res.redirect('/step3')
    })
})

//step 3 page
app.get('/step3', (req, res) => {
  res.render('step3');
});

app.post('/input3', (req, res) => {
  const cInfo = new Blog3(req.body);

  cInfo.save()
    .then((result) =>{
      res.redirect('/step4')
    })
})

//step 4 page
app.get('/step4', (req, res) => {
  res.render('step4');
});

app.post('/input4', (req, res) => {
  const aInfo = new Blog4(req.body);

  aInfo.save()
    .then((result) =>{
      res.redirect('/step5')
    })
})

//step 5 page
app.get('/step5', (req, res) => {
  res.render('step5');
}); 

app.post('/input5', (req, res) => {
  const apoint = new Blog5(req.body);

  apoint.save()
    .then((result) =>{
      res.redirect('/step6')
    })
})

//step 6 page
app.get('/step6', (req, res) => {
  res.render('step6');
});

app.post('/input6Y', (req, res) => {
  const AidInfo = new Blog6({
    Medical_Aid: 'Yes',
  }); 

  AidInfo.save()
    .then((result) =>{
      res.redirect('/step7')
    })
})

app.post('/input6N', (req, res) => {
  const AidInfo = new Blog6({
    Medical_Aid: 'No',
  }); 

  AidInfo.save()
    .then((result) =>{
      res.redirect('/step8')
    })
})

//step 7 page
app.get('/step7', (req, res) => {
  res.render('step7');
}); 

app.post('/input7', (req, res) => {
  const cInfo = new Blog7(req.body);

  cInfo.save()
    .then((result) =>{
      res.redirect('/step8')
    })
})

//step 8 page
app.get('/step8', (req, res) => {
  res.render('step8');
});


// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404).send('<p>Error 404</p>');
});

module.exports = app;
