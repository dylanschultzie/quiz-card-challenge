const fs = require('fs');
const rawFile = fs.readFileSync('database.json');
const db = JSON.parse(rawFile);

module.exports = db;

// To test multiple, stacked cards, copy & paste the following JSON into the database.json file
// NOTE: Terminator 2 knowledge somewhat necessary

// {
//   "knowledgeCheckBlocks": [
//     {
//       "_id": 0,
//       "question": {
//         "text": "What is this a picture of?",
//         "media": {
//           "type": "image",
//           "url": "https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif"
//         }
//       },
//       "answers": [
//         { "text": "Cookies and coffee", "isCorrect": true },
//         { "text": "Donuts and cider", "isCorrect": false }
//       ],
//       "feedback": "I just love cookies and a warm cup of coffee!",
//       "selectedIndex": "",
//       "answerSubmitted": false
//     },
//     {
//       "_id": 1,
//       "question": {
//         "text": "Have you seen this boy?",
//         "media": {
//           "type": "image",
//           "url": "/img/terminator.jpg"
//         }
//       },
//       "answers": [
//         { "text": "Yes", "isCorrect": true },
//         { "text": "No", "isCorrect": false },
//         { "text": "Maybe", "isCorrect": false }
//       ],
//       "feedback": "",
//       "selectedIndex": "",
//       "answerSubmitted": false
//     }
//   ]
// }
