import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #dfdfdf;
  border-radius: 4px;
  cursor: pointer;
  height: 1.5rem;
`;

type Props = {
  answers: string[];
  correctAnswer: string;
  question: string;
};

function QuestionCard({ answers, correctAnswer, question }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // need to check if answer was correct
    const guess = e.currentTarget.innerText;
    if (guess === correctAnswer) {
      e.currentTarget.style.backgroundColor = '#3ef222';
    } else if (guess !== correctAnswer) {
      e.currentTarget.style.backgroundColor = '#ed071a';
    }
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question }} />
      <StyledDiv>
        {answers.map((answer) => (
          <Button dangerouslySetInnerHTML={{ __html: answer }} onClick={handleClick} key={answer} />
        ))}
      </StyledDiv>
    </div>
  );
}

export default QuestionCard;
