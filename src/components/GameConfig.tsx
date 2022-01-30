import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
/*
* The options that trivia api can take are 
* Number of questions
* difficulty: string; easy, medium, difficult
*/
type Props = {
  handleSubmit: () => void;
  nmbrOfQuestions: string;
  setNmbrOfQuestions: Dispatch<SetStateAction<string>>;
  setDifficulty: Dispatch<SetStateAction<string>>;
};

function GameConfig ({
  handleSubmit,
  nmbrOfQuestions,
  setNmbrOfQuestions,
  setDifficulty,
}: Props) {
  const selectOptions = ['Easy', 'Medium', 'Difficult'];

  const handleSelectChange = useCallback((e) => {
    setDifficulty(e.target.value);
  }, []);

  const handleInputChange = useCallback((e) => {
    setNmbrOfQuestions(e.target.value);
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="nmbrOfQuestions">Total Number of Questions:</label>
        <input onChange={handleInputChange} value={nmbrOfQuestions} type="text" placeholder="Set Number of Questions" id="nmbrOfQuestions" required/>
      </div>
      <div>
        <label htmlFor="difficulty">Choose Difficulty:</label>
        <select id="difficulty" onChange={handleSelectChange}>
          {selectOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
      <button onClick={handleSubmit}>Begin Game</button>
    </div>
  )
}

export default GameConfig;

