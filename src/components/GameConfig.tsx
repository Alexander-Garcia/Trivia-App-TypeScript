import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
/*
* The options that trivia api can take are
* Number of questions
* difficulty: string; easy, medium, difficult
*/
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

  const handleSelectChange = useCallback((e) => {
    setDifficulty(e.target.value);
  }, [setDifficulty]);

  const handleInputChange = useCallback((e) => {
    setNumberOfQuestions(e.target.value);
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
          {selectOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <button onClick={handleSubmit}>Begin Game</button>
    </div>
  );
}

export default GameConfig;
