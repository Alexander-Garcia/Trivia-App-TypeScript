/*
* TODO: style the app with styled components
* handle end game better
* add error handling
* add skeleton loading?
* 
*/
import { useState } from 'react';
import axios from 'axios';
import { formatData } from './utils';

import type { FormattedQuestion, Question } from './types';

import GameConfig from './components/GameConfig';
import GameCard from './components/GameCard';


type Response = {
  data: {
    response_code: number;
    results: Question[]; 
  },
};

function App() {
  const [nmbrOfQuestions, setNmbrOfQuestions] = useState('');
  const [questions, setQuestions] = useState<FormattedQuestion[]>([]);
  const [isGameReady, setIsGameReady] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const { data }: Response = await axios.get(`https://opentdb.com/api.php`, {
      params: {
        amount: parseInt(nmbrOfQuestions, 10),
        difficulty: difficulty.toLowerCase(),
      },
    });
    if (data?.response_code !== 0) {
      throw new Error('error fetching game data');
    } else {
      setIsGameReady(true);
      setQuestions(formatData(data.results));
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading Game....</div>
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      { isGameReady
        ? <GameCard questions={questions} />
        : <GameConfig 
            handleSubmit={handleSubmit}
            nmbrOfQuestions={nmbrOfQuestions}
            setNmbrOfQuestions={setNmbrOfQuestions}
            setDifficulty={setDifficulty}
          />
      }
   </div>
  );
}

export default App;

