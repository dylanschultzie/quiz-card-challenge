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
    <div className="container mx-auto">
      {knowledgeBlocks.map((block) => (
        <div key={block._id} className="flex justify-center mx-auto py-5 lg:max-w-3xl">
          <KnowledgeCheck key={block._id} {...block} />
        </div>
      ))}
    </div>
  );
};
