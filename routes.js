const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<!DOCTYPE html>\
        <html>\
        <body>\
        <h2>HTML Forms</h2>\
        <form action="/register" method="POST">\
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
        return res.end();
    }
    if (url === '/register' && method === 'POST'){
        const body = [];
        req.on('data',  (data) =>{
            console.log(data);
            body.push(data);
        });
        req.on('end',  () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            var fname = parsedBody.split('&')[0];
            fname = fname.split('=')[1];
            var lname = parsedBody.split('&')[1];
            lname = lname.split('=')[1];
            fs.writeFileSync('info.txt', 'first name is '+fname+' ,last name is ' +lname);

        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

module.exports = routeHandler;