const express = require('express');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.send('<!DOCTYPE html>\
    <html>\
    <body>\
    <h2>HTML Forms</h2>\
    <form action="/users" method="post">\
      <label for="fname">First name:</label><br>\
      <input type="text" id="fname" name="fname" value="John"><br>\
      <label for="lname">Last name:</label><br>\
      <input type="text" id="lname" name="lname" value="Doe"><br><br>\
      <input type="submit" value="Submit">\
    </form>\
    <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>\
    </body>\
    </html>');
  });
  
  router.post('/users', (req, res, next) => {
      console.log(req.body.fname);
      res.redirect('/');
  });
  





module.exports = router;