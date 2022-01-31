import { useCallback } from 'react';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  handleSubmit: () => void;
  numberOfQuestions: number;
  setNumberOfQuestions: Dispatch<SetStateAction<number>>;
  setDifficulty: Dispatch<SetStateAction<string>>;
};

function GameConfig({
  handleSubmit,
  numberOfQuestions,
  setNumberOfQuestions,
  setDifficulty,
}: Props) {
  const selectOptions = ['Easy', 'Medium', 'Difficult'];

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.currentTarget.value);
  }, [setDifficulty]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value, 10);
    if (value) {
      setNumberOfQuestions(value);
    }
  }, [setNumberOfQuestions]);

  return (
    <div>
      <div>
        <label htmlFor="numberOfQuestions">Total Number of Questions:</label>
        <input
          onChange={handleInputChange}
          value={numberOfQuestions}
          type="number"
          placeholder="Set Number of Questions"
          id="numberOfQuestions"
        />
      </div>
      <div>
        <label htmlFor="difficulty">Choose Difficulty:</label>
        <select id="difficulty" onChange={handleSelectChange}>
          {selectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>Begin Game</button>
    </div>
  );
}

export default GameConfig;
