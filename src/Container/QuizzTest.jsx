import React, { useState } from 'react';

function QuizzTest(props) {

    const quizzQuestions = [
        {
            question: 'What is the full form of html..',
            options: [
                { answer: 'Hyper Text Markup Language', isCorrect: true },
                { answer: 'Hyper txt Mup Language', isCorrect: false },
                { answer: 'Http Text Markup Language', isCorrect: false },
                { answer: 'Abcd', isCorrect: false },
            ]

        },

        {
            question: 'What is the full form of CSS..',
            options: [
                { answer: 'Cascading Style Sheet', isCorrect: true },
                { answer: 'Cat Style Sheet', isCorrect: false },
                { answer: 'Cascading sheet style', isCorrect: false },
                { answer: 'Abcd', isCorrect: false },
            ]

        },

        {
            question: 'What is the full form of HTTP..',
            options: [
                { answer: 'Hyper Text Tranfer Protocol', isCorrect: true },
                { answer: 'Text Transfer protocol', isCorrect: false },
                { answer: 'Hyper Text Markup Language', isCorrect: false },
                { answer: 'Abcd', isCorrect: false },
            ]

        },

    ]

    console.log(quizzQuestions);


    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false)

    const [score, setScore] = useState(0)

    const handleAnsbtn = (isCorrect) => {

        if (isCorrect == true) {
            alert("Your answer is correct")
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < quizzQuestions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }


    }

    return (
        <div>
            {
                showScore ?
                    <div>You scored {score} out of {quizzQuestions.length}</div>
                    :
                    <>
                        <div className='Question-count'>Question {currentQuestion + 1} /{quizzQuestions.length}</div>


                        <div className='question-text'>
                            {
                                quizzQuestions[currentQuestion].question
                            }
                        </div>

                        <div className='quizz-answer'>
                            {
                                quizzQuestions[currentQuestion]?.options?.map((v) => (
                                    <button onClick={() => handleAnsbtn(v.isCorrect)}>{v?.answer}</button>
                                ))


                            }

                        </div>
                    </>
            }
        </div>
    );
}

export default QuizzTest;