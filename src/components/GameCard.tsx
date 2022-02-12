import { useState } from 'react';
import styled from 'styled-components';

import type { FormattedQuestion } from '../types';

import QuestionCard from './QuestionCard';

const StyledDiv = styled.div`
  padding: 15px;
`;

type Props = {
  questions: FormattedQuestion[];
};

function GameCard({ questions }: Props) {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  // TODO: handle game over better - could display overall game stats or
  // just change button to restart back to game config component
  const isGameOver = index === questions.length - 1;

  const handleNext = () => {
    setIndex((ind) => ind + 1);
  };

  return (
    <StyledDiv>
      <QuestionCard
        answers={questions[index].answers}
        correctAnswer={questions[index].correctAnswer}
        question={questions[index].question}
      />
      { isGameOver ? <div>Game over</div>
        : <button type="submit" onClick={handleNext}>Next</button>}
    </StyledDiv>
  );
}

export default GameCard;
