import { useCallback, useState } from 'react';

import type { FormattedQuestion } from '../types';

import QuestionCard from './QuestionCard';

type Props = {
  questions: FormattedQuestion[];
}

function GameCard ({ questions }: Props) {
  const [index, setIndex] = useState(0);
  // TODO: handle game over better - could display overall game stats or just change button to restart back to game config component
  const isGameOver =  index === questions.length - 1;

  const handleNext = useCallback(() => {
    setIndex((index) => index + 1);
  }, []);

  return (
    <div>
      <QuestionCard 
        question={questions[index].question}
        answers={questions[index].answers}
        correctAnswer={questions[index].correctAnswer}
        />
      { isGameOver ? <div>Game over</div>
        : <button onClick={handleNext}>Next</button>
      }
    </div>
  );
}

export default GameCard;
