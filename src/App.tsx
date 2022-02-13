/*
 * TODO: style the app with styled components
 * handle end game better
 *
 */
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import formatData from './utils/index';

import type { FormattedQuestion, Question } from './types';

import GameConfig from './components/GameConfig';
import GameCard from './components/GameCard';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGameContainer = styled.div`
  align-items: center;
  border: 1px wavy;
  border-radius: 1rem;
  box-shadow: 0 0 20px #fff;
  display: flex;
  flex-direction: column;
  height: 25rem;
  margin-top: 2.5rem;
  width: 33%;

`;

const StyledH1 = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 40px;
`;

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
        throw new Error('Error with the response');
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
    <StyledApp>
      <StyledGameContainer>
        <StyledH1>Trivia App</StyledH1>
        {isGameReady ? (
          <GameCard questions={questions} setIsGameReady={setIsGameReady} />
        ) : (
          <GameConfig
            handleSubmit={handleSubmit}
            numberOfQuestions={numberOfQuestions}
            setNumberOfQuestions={setNumberOfQuestions}
            setDifficulty={setDifficulty}
          />
        )}
      </StyledGameContainer>
    </StyledApp>
  );
}

export default App;
