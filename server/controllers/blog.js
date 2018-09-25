var connection = require('./../config');

module.exports.blogData = function (req, res) {
  connection.query('select * from blog', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}

module.exports.addBlog= function (req, res) {
 
  console.log(req.body)
  var users = {
    "blog_name": req.body.blog_name,
    "blog_description": req.body.blog_description,
    "blog_image": req.body.blog_image,
    "blog_date": req.body.blog_date,
    "blog_like": req.body.blog_like,
  }
  
  connection.query('INSERT INTO  blog SET ?', users, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
      res.json({
        status: true,
        data: results,
        fields: fields,
        message: 'blog information  insert sucessfully'
      })
    }
  });
}

module.exports.deleteBlog = function (req, res) {
console.log(req.params.blog_id)
  connection.query('DELETE FROM blog WHERE blog_id=?', [req.params.blog_id], (err, rows, fields) => {
    if (!err) {
      console.log('deleted')
      res.json({
        status: true,
        message: 'blog deleted sucessfully'

      })
    } 
    else {
      console.log(err)
    }
  });
}

module.exports.updateBlog = function (req, res) {
  console.log(req.body)
  let blog_id = req.body.blog_id
  console.log(blog_id)

  var data = {
    "empolyee_name": req.body.empolyee_name,
    "blog_status": req.body.blog_status,
  }

  console.log(data)
  connection.query('UPDATE blog SET ? WHERE blog_id = ?', [data, blog_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.json({
        status: true,
        data: results,
        message: 'blog List status update sucessfully'
      })
    }
  });
}


module.exports.UpdateBlogData = function (req, res) {
  console.log("update")
  console.log(req.body)

  let blog_id = req.body.blog_id
  console.log(blog_id)

  var data = {
    "blog_name": req.body.blog_name,
    "blog_description": req.body.blog_description,
    "blog_image": req.body.blog_image,
    "blog_date": req.body.blog_date,
    "blog_like": req.body.blog_like,
  }

  console.log(data)
  connection.query('UPDATE blog SET ? WHERE blog_id = ?', [data, blog_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.send({
        status: true,
        data: results,
        message: 'blog  update sucessfully'
      })
    }
  });
}