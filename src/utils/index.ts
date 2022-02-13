import type { FormattedQuestion, Question } from '../types';

const shuffleArray = (answerArray: string[]) => [...answerArray].sort(() => Math.random() - 0.5);

function formatData(data: Question[]): FormattedQuestion[] {
  return data.map((d: Question): FormattedQuestion => ({
    category: d.category,
    correctAnswer: d.correct_answer,
    difficulty: d.difficulty,
    incorrectAnswers: d.incorrect_answers,
    question: d.question,
    type: d.type,
    answers: shuffleArray([...d.incorrect_answers, d.correct_answer]),
  }));
}

export default formatData;
