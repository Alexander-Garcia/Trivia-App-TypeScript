import { useCallback } from 'react';
import styled from 'styled-components';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: space-around;
  width: 97%;
`;

const Label = styled.label`
  font-family: 'Permanent Marker', sans-serif;
  font-size: 1.25rem;
  margin-right: 10px;
`;

const Input = styled.input`
  background-color: #ccc;
  border-bottom-color: #2323ff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-top-style: hidden;
  height: 1.25rem;
  &focus: {
    box-shadow: 0 0 10px;
    outline: none;
    transition: box-shadow 1s;
  }
`;

const Select = styled.select`
  background-color: #ccc;
  border-bottom-color: #2323ff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-top-style: hidden;
  height: 1.5rem;
  margin-left: 1.8rem;
  width: 9.7rem;
`;

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
    <StyledContainer>
      <div>
        <Label htmlFor="numberOfQuestions">Number of Questions</Label>
        <Input
          onChange={handleInputChange}
          value={numberOfQuestions}
          type="number"
          placeholder="Set Number of Questions"
          id="numberOfQuestions"
        />
      </div>
      <div>
        <Label htmlFor="difficulty">Choose Difficulty</Label>
        <Select id="difficulty" onChange={handleSelectChange}>
          {selectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </div>
      <div>
        <button onClick={handleSubmit}>Begin Game</button>
      </div>
    </StyledContainer>
  );
}

export default GameConfig;
