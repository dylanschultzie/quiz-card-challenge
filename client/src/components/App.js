import React, { useEffect, useState } from 'react';
import { KnowledgeCheck } from './KnowledgeCheck';

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
    <div className="container mx-auto m-8 sm:m-4">
      <div className="flex justify-center py-5">
        {knowledgeBlocks.map((block) => (
          <KnowledgeCheck key={block.question} {...block} />
        ))}
      </div>
    </div>
  );
};
