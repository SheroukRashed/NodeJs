const express = require('express');
const app = express();
const adminRouter = require('./routes/admin');
const storeRouter = require('./routes/store');

app.use(express.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(storeRouter);


app.listen(3000);