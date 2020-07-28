const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db');

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

const shutDown = () => {
  console.log('Received kill signal, shutting down gracefully');
  fs.writeFileSync('./database.json', JSON.stringify(db), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
    expressServer.close(() => {
      process.exit(0);
    });
  });
};

if (require.main === module) {
  const expressServer = server().start();

  process.on('SIGINT', shutDown);
  process.on('SIGTERM', shutDown);
}

module.exports = server;
