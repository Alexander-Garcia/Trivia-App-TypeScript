type Props = {
  answers: string[];
  correctAnswer: string;
  question: string;
}

/*
* still unsure if this is the best way but its a workaround from stackoverflow for the error
* Property innerText does not exist on type EventTarget
* when trying to type the event in handleClick as React.MouseEvent<HTMLLIElement>
*/
interface CustomEventTarget extends EventTarget {
  innerText: string;
}
interface CustomMouseEvent extends React.MouseEvent<HTMLLIElement> {
  target: CustomEventTarget;
}

function QuestionCard ({ answers, correctAnswer, question }: Props) {
  const handleClick = (e: CustomMouseEvent) => {
    // need to check if answer was correct
    const guess = e.target.innerText;
    if (guess === correctAnswer) {
      // will need to style based on correct / incorrect answer
      // turn correct answer green and if incorrect style that selection to red
      console.log('correct');
    }
  }
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {answers.map((answer) => <li onClick={handleClick} key={answer}>{answer}</li>)}
      </ul>
    </div>
  )
}

export default QuestionCard;
