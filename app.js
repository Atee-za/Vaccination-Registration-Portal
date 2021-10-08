const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const Blog2 = require('./models/personalInfo');
const Blog3 = require('./models/contactBlog');

const app = express();

//connect to database
var mongoDB = 'mongodb+srv://athi:athi2021@cluster0.ious3.mongodb.net/Vaccination_Registration_Portal?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//mongo db link 
/*const dbURI = 'mongodb+srv://athi:athi2021@cluster0.ious3.mongodb.net/Vaccination Registration Portal?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log("Connecting to MongoDB err"));

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
});  */


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

app.post('/blog', (req, res) => {
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

app.post('/step1', (req, res) => {
  res.redirect('/step2');
})

//step 2 page
app.get('/step2', (req, res) => {
  res.render('step2');
});

app.post('/personalInfo', (req, res) => {
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

app.post('/contactBlog', (req, res) => {
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

//step 5 page
app.get('/step5', (req, res) => {
  res.render('step5');
}); 

//step 6 page
app.get('/step6', (req, res) => {
  res.render('step6');
});

//step 7 page
app.get('/step7', (req, res) => {
  res.render('step7');
}); 

//step 8 page
app.get('/step8', (req, res) => {
  res.render('step8');
});


// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404).send('<p>Error 404</p>');
});

module.exports = app;
