const db = require('../db');

module.exports = (app) => {
  app.get('/knowledge-check-blocks', (req, res) => res.send(db.knowledgeCheckBlocks));

  app.put('/knowledge-check-blocks', (req, res) => {
    const { blockId, selectedIndex, answerSubmitted } = req.body;
    db.knowledgeCheckBlocks = db.knowledgeCheckBlocks.map((block) =>
      block._id !== blockId
        ? block
        : {
            ...block,
            selectedIndex,
            answerSubmitted,
          }
    );
    res.status(200).send('');
  });
};
