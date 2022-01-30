import { useState } from 'react';
import GameConfig from './components/GameConfig';

function App() {
  const [nmbrOfQuestions, setNmbrOfQuestions] = useState('');
  const [selectOption, setSelectOption] = useState('Easy');

  const handleSubmit = () => {
   console.log('nmbrOfquestions', nmbrOfQuestions); 
   console.log('select Option', selectOption); 
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      <GameConfig 
        handleSubmit={handleSubmit}
        nmbrOfQuestions={nmbrOfQuestions}
        setNmbrOfQuestions={setNmbrOfQuestions}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
   </div>
  );
}

export default App;
