import React from 'react';

export const KnowledgeCheck = ({ data }) => {
  const { answers, feedback, question } = data;
  return <div>{feedback}</div>;
};
