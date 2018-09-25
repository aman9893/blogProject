var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');
var connection = require('./config');
var multer = require('multer');
var path = require('path');
app.use(express.static(__dirname + '/uploads'));``
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});



app.use('/images', express.static(__dirname+'/uploads/'));

var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },

  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});


// you can access image using this url: http://localhost:7000/images/abc.jpg



var bloglist = require('./controllers/blog');
var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/login', authenticateController.authenticate);

///----------------------------------library--------------------------------
app.get('/api/blog_list', bloglist.blogData);
app.post('/api/add_blog', bloglist.addBlog);
app.delete('/api/delete_blog/:blog_id', bloglist.deleteBlog);
app.put('/api/update_bloglist', bloglist.updateBlog);
app.put('/api/update_blog', bloglist.UpdateBlogData);

app.listen(8000);
