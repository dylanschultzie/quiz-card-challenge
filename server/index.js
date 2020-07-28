const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

function server() {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());

  require('./routes/knowledgeCheckRoutes')(app);

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`));

  return app;
}

if (require.main === module) server().start();

module.exports = server;
