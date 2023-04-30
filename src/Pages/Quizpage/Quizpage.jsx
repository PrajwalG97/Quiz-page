import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './quizpage.css'

const Quizpage = () => {

    const questions = [
		{
			questionText: 'Who is the 1st PM of India?',
			answerOptions: [
				{ answerText: 'Narendra Modi', isCorrect: false },
				{ answerText: 'Lal Bahadur Shastri', isCorrect: false },
				{ answerText: 'Jawaharlal Nehru', isCorrect: true },
				{ answerText: 'Indira Gandhi', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Manipur?',
			answerOptions: [
				{ answerText: 'Agartala', isCorrect: false },
				{ answerText: 'Imphal', isCorrect: true },
				{ answerText: 'Kohima', isCorrect: false },
				{ answerText: 'Dispur', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the biggest country in world?',
			answerOptions: [
				{ answerText: 'Russia', isCorrect: true },
				{ answerText: 'Canada', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'Australia', isCorrect: false },
			],
		},
		{
			questionText: 'How many World war have been taken plae?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    const resetStateClick =()=>{
        setCurrentQuestion (0)
        setShowScore(false)
        setScore(0)
    }

    return (
		<div className='main-ctn'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <button className="retry" onClick={resetStateClick}>Retry</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question.{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);


}

export default Quizpage