import React, { useEffect, useState } from 'react';
import { KnowledgeCheck } from './KnowledgeCheck';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [knowledgeBlocks, setKnowledgeBlocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/knowledge-check-blocks')
      .then((res) => res.json())
      .then(
        (result) => {
          setKnowledgeBlocks(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-5">
        {knowledgeBlocks.map((block) => (
          <KnowledgeCheck key={uuidv4()} {...block} />
        ))}
      </div>
    </div>
  );
};
