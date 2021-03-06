const express = require('express');
const app = express();
const path = require('path');

// Global settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('appName', 'Node First App');

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});

// Routes
app.use(require('./routes'));

// Middlewares

// Static files
app.use(express.static(path.join(__dirname, 'public')));