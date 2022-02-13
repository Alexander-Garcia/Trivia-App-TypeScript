import { useState } from 'react';
import styled from 'styled-components';

import type { FormattedQuestion } from '../types';

import QuestionCard from './QuestionCard';

// style
import Button from '../styles/Button';

const StyledDiv = styled.div`
  width: 90%;
`;

type Props = {
  setIsGameReady: React.Dispatch<React.SetStateAction<boolean>>;
  questions: FormattedQuestion[];
};

function GameCard({ setIsGameReady, questions }: Props) {
  const [index, setIndex] = useState(0);
  const isGameOver = index === questions.length - 1;

  const onGameReset = () => {
    setIsGameReady(false);
  };

  const onNextClick = () => {
    setIndex(index + 1);
  };

  return (
    <StyledDiv>
      <QuestionCard
        answers={questions[index].answers}
        correctAnswer={questions[index].correctAnswer}
        question={questions[index].question}
      />
      { isGameOver ? <Button onClick={onGameReset}>Restart</Button>
        : <Button type="submit" onClick={onNextClick}>Next</Button>}
    </StyledDiv>
  );
}

export default GameCard;
