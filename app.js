const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blog');

const app = express();

//mongo db link
const dbURI = 'mongodb+srv://VRPuser:vrp654word@vrp.ivfk4.mongodb.net/vrp-set?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
//  .then((result) => app.listen(3000))
//  .catch((err) => console.log(err));

/*
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'testing02',
    name: 'Basic Test number 2',
    age: '2'
  });

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blogs', (req, res) => {
  Blog.findById('615466a35b22a29a700a4f63')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/blogs', (req, res) => {
  console.log(req.body);
})

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

