'use strict';

const SwaggerExpress = require('swagger-express-mw');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const app = require('express')();
app.use(fileUpload());

mongoose.connect('mongodb://localhost:27017/studentdev');

module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
