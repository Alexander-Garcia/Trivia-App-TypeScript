import type { FormattedQuestion, Question } from '../types';
/*
* data: [
* { 
* category
* correct_answer
* difficulty
* incorrect_answers
* question
* type
* ]
*/
const shuffleArray = (answerArray: string[]) => [...answerArray].sort(() => Math.random() - 0.5);
  


export function formatData (data: Question[]): FormattedQuestion[] {
  return data.map((d: Question): FormattedQuestion => {
    return {
      category: d.category,
      correctAnswer: d.correct_answer,
      difficulty: d.difficulty,
      incorrectAnswers: d.incorrect_answers,
      question: d.question,
      type: d.type,
      answers: shuffleArray([ ...d.incorrect_answers, d.correct_answer ]),
    };
  });
}
