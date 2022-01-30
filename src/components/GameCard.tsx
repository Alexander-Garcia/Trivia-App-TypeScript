import { useCallback, useState } from 'react';

import type { FormattedQuestion } from '../types';

import QuestionCard from './QuestionCard';

type Props = {
  questions: FormattedQuestion[];
}

function GameCard ({ questions }: Props) {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex(index + 1);
  }, []);

  return (
    <div>
      <QuestionCard 
        question={questions[index].question}
        answers={questions[index].answers}
        correctAnswer={questions[index].correctAnswer}
        />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default GameCard;
