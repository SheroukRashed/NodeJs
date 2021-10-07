const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/add-user', (req, res, next) => {
  res.send('<!DOCTYPE html>\
  <html>\
  <body>\
  <h2>HTML Forms</h2>\
  <form action="/action_page" method="post">\
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

app.post('/action_page', (req, res, next) => {
    console.log(req.body.fname);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);