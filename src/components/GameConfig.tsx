import { useCallback } from 'react';
import styled from 'styled-components';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';

// styles
import Button from '../styles/Button';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: space-evenly;
  width: 97%;
`;

const Label = styled.label`
  font-family: 'Permanent Marker', sans-serif;
  font-size: 1.25rem;
`;

const Input = styled.input`
  background-color: #ccc;
  border-bottom-color: #2323ff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-top-style: hidden;
  height: 1.25rem;
  &:focus {
    box-shadow: 0 0 5px;
    outline: none;
    transition: box-shadow 0.3s;
  }
`;

const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Select = styled.select`
  background-color: #ccc;
  border-bottom-color: #2323ff;
  border-left-style: hidden;
  border-right-style: hidden;
  border-top-style: hidden;
  height: 1.5rem;
  width: 9.4rem;
  &:focus {
    outline: none;
  }
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
    } else {
      throw new Error('error setting up game');
    }
  }, [setNumberOfQuestions]);

  return (
    <StyledContainer>
      <OptionsContainer>
        <Label htmlFor="numberOfQuestions">Questions</Label>
        <Input
          onChange={handleInputChange}
          value={numberOfQuestions}
          type="number"
          placeholder="Set Number of Questions"
          id="numberOfQuestions"
        />
      </OptionsContainer>
      <OptionsContainer>
        <Label htmlFor="difficulty">Difficulty</Label>
        <Select id="difficulty" onChange={handleSelectChange}>
          {selectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </OptionsContainer>
      <div>
        <Button onClick={handleSubmit}>START</Button>
      </div>
    </StyledContainer>
  );
}

export default GameConfig;
