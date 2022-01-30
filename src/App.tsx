import { useState } from 'react';
import axios from 'axios';

import GameConfig from './components/GameConfig';
import QuestionCard from './components/QuestionCard';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
type Response = {
  data: {
    response_code: number;
    results: Question[]; 
  },
};

function App() {
  const [nmbrOfQuestions, setNmbrOfQuestions] = useState('');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [isGameReady, setIsGameReady] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');

  const handleSubmit = async () => {
    const { data }: Response = await axios.get(`https://opentdb.com/api.php`, {
      params: {
        amount: parseInt(nmbrOfQuestions,10),
        difficulty: difficulty.toLowerCase(),
      },
    });
    if (data?.response_code !== 0) {
      throw new Error('error fetching game data');
    } else {
      setIsGameReady(true);
      setQuestions(data.results);
    }
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      { isGameReady
        ? <QuestionCard/>
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
