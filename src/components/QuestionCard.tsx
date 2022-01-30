import React from 'react';

type Props = {
  answers: string[];
  correctAnswer: string;
  question: string;
};

function QuestionCard({ answers, correctAnswer, question }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // need to check if answer was correct
    const guess = e.currentTarget.innerText;
    if (guess === correctAnswer) {
      // will need to style based on correct / incorrect answer
      // turn correct answer green and if incorrect style that selection to red
      console.log('correct');
    }
  };
  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer) => <button onClick={handleClick} key={answer}>{answer}</button>)}
    </div>
  );
}

export default QuestionCard;
