import React, { useEffect, useState } from 'react';
import { KnowledgeCheck } from './blocks/KnowledgeCheck';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [knowledgeBlocks, setKnowledgeBlocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/knowledge-check-blocks')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setKnowledgeBlocks(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      {knowledgeBlocks.map((block) => (
        <KnowledgeCheck key={uuidv4()} data={block} />
      ))}
    </div>
  );
};
