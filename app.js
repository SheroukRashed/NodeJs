const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
        res.write('<!DOCTYPE html>\
        <html>\
        <body>\
        <h2>HTML Forms</h2>\
        <form action="/action_page.php">\
          <label for="fname">First name:</label><br>\
          <input type="text" id="fname" name="fname" value="John"><br>\
          <label for="lname">Last name:</label><br>\
          <input type="text" id="lname" name="lname" value="Doe"><br><br>\
          <input type="submit" value="Submit">\
        </form>\
        <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>\
        </body>\
        </html>\
        ');
    }else{
        res.write("<!DOCTYPE html>\
        <html>\
        <body>\
        <h1>My First Heading</h1>\
        <p>My first paragraph.</p>\
        </body>\
        </html>");
    }
    res.end();
});

server.listen(3000);