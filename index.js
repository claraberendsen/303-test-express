const express = require('express');
const morgan = require('morgan');

// Initialization of the app
const app = express();

// logger
app.use(morgan('dev'));

app.use(express.json());

// Rendering error function

app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.output.statusCode || 500);
  res.json({ ...err.output });
});

module.exports = app;
