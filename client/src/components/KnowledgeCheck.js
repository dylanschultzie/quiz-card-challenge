import React, { useState } from 'react';

export const KnowledgeCheck = ({ answers, feedback, question }) => {
  const [radioState, setRadioState] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = (index) => {
    return answers[index].isCorrect;
  };

  const handleSubmit = (event) => {
    if (radioState) {
      setSubmitted(true);
    }
    event.preventDefault();
  };

  const handleRetake = (event) => {
    setSubmitted(false);
    setRadioState('');
    event.preventDefault();
  };

  const handleRadioSelect = (event) => {
    if (!submitted) {
      setRadioState(event.target.value);
    }
  };

  return (
    <div className="max-w-xlg rounded overflow-hidden shadow-lg">
      <div className="p-12">
        <div className="font-bold text-xl mb-4">{question.text}</div>
        <img className="mb-4 w-full" src={question.media.url} alt={question.text} />
        <form onSubmit={handleSubmit}>
          {answers.map((answer, index) => (
            // Generally I wouldn't use the array index as a key, but since the radio
            // button list is immutable there's no concern of the list changing and
            // causing weird bugs.
            <label key={index} className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-8 leading-tight"
                type="radio"
                name="answers"
                value={index}
                checked={index === parseInt(radioState)}
                onChange={handleRadioSelect}
              />
              <span className="text-gray-700 text-base">{answer.text}</span>
            </label>
          ))}
          {!submitted ? (
            <div className="flex justify-center">
              <button
                className={`mt-4 text-white font-bold py-2 px-4 rounded-full ${
                  radioState !== '' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500'
                }`}
              >
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
                  onClick={handleRetake}
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
