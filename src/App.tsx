/*
 * TODO: style the app with styled components
 * handle end game better
 * add error handling
 * add skeleton loading?
 *
 */
import { useState } from 'react';
import axios from 'axios';
import formatData from './utils/index';

import type { FormattedQuestion, Question } from './types';

import GameConfig from './components/GameConfig';
import GameCard from './components/GameCard';

type AxiosResponse = {
  data: {
    response_code: number;
    results: Question[];
  };
};

function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [questions, setQuestions] = useState<FormattedQuestion[]>([]);
  const [isGameReady, setIsGameReady] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data }: AxiosResponse = await axios.get(
        'https://opentdb.com/api.php',
        {
          params: {
            amount: numberOfQuestions,
            difficulty: difficulty.toLowerCase(),
          },
        },
      );
      if (data?.response_code !== 0) {
        throw new Error('error fetching game data');
      } else {
        setIsGameReady(true);
        setQuestions(formatData(data.results));
        setLoading(false);
      }
    } catch (e) {
      console.error('Issue retrieving game data', e);
    }
  };

  if (loading) {
    return <div>Loading Game....</div>;
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      {isGameReady ? (
        <GameCard questions={questions} />
      ) : (
        <GameConfig
          handleSubmit={handleSubmit}
          numberOfQuestions={numberOfQuestions}
          setNumberOfQuestions={setNumberOfQuestions}
          setDifficulty={setDifficulty}
        />
      )}
    </div>
  );
}

export default App;
