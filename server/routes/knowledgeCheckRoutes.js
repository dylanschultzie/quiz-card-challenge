module.exports = (app) => {
  app.get('/knowledge-check-blocks', (req, res) => res.send(db.knowledgeCheckBlocks));

  app.put('/knowledge-check-blocks', (req, res) => {
    console.log(req.body);
  });
};
