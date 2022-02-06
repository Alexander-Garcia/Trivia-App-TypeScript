import React from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

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
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      <AnswerContainer>
        {answers.map((answer) => <button onClick={handleClick} key={answer}>{answer}</button>)}
      </AnswerContainer>
    </div>
  );
}

export default QuestionCard;
