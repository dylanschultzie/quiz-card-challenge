import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const KnowledgeCheck = ({ answers, feedback, question }) => {
  const [radioState, setRadioState] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      <div className="p-12">
        <div className="font-bold text-xl mb-4">{question.text}</div>
        <img className="mb-4 w-full" src={question.media.url} alt={question.text} />
        <form
          onSubmit={(event) => {
            setSubmitted(true);
            event.preventDefault();
          }}
        >
          {answers.map((answer) => (
            <label key={uuidv4()} className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-8 leading-tight"
                type="radio"
                name="answers"
                value={answer.text}
                checked={answer.text === radioState}
                onChange={(event) => {
                  setRadioState(event.target.value);
                  event.preventDefault();
                }}
              />
              <span className="text-gray-700 text-base">{answer.text}</span>
            </label>
          ))}
          {!submitted ? (
            <div className="flex justify-center">
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Submit
              </button>
            </div>
          ) : (
            <div>
              <div className="justify-center">
                <p>Correct or not?</p>
                <p>{feedback}</p>
              </div>
              <div className="w-full">
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={(event) => {
                    setSubmitted(false);
                    setRadioState('');
                    event.preventDefault();
                  }}
                >
                  Take Again
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
