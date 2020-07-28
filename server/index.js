const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = {
  knowledgeCheckBlocks: [
    {
      _id: 0,
      question: {
        text: 'What is this a picture of?',
        media: {
          type: 'image',
          url:
            'https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif',
        },
      },
      answers: [
        {
          text: 'Cookies and coffee',
          isCorrect: true,
        },
        {
          text: 'Donuts and cider',
          isCorrect: false,
        },
      ],
      feedback: 'I just love cookies and a warm cup of coffee!',
      selectedIndex: 0,
      answerSubmitted: false,
    },
  ],
};

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
