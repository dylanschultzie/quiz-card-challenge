import React, { useState } from 'react';

export const KnowledgeCheck = ({ answers, feedback, question }) => {
  const [radioState, setRadioState] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = (index) => {
    return answers[index].isCorrect;
  };

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
          {answers.map((answer, index) => (
            <label key={index} className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-8 leading-tight"
                type="radio"
                name="answers"
                value={index}
                checked={index === parseInt(radioState)}
                onChange={(event) => {
                  if (!submitted) {
                    setRadioState(event.target.value);
                  }
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
                <p>{isCorrect(radioState) ? 'Correct!' : 'Incorrect'}</p>
                <p>{feedback}</p>
              </div>
              <div className="flex justify-center">
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
