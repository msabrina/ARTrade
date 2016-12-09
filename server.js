'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const methodOverride = require('method-override');
// const indexRouter = require('./routes/index.js');
// const authRouter = require('./routes/auth');
// const usersRouter = require('./routes/users');


app.use(logger('dev'));
app.use(bodyParser.json());

// app.use('/api/v1', require('./routes/api.js'));

// app.use(history({ logger: logger }))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
