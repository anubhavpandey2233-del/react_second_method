import React, { useState } from 'react';

function QuizzApp(props) {

    const quizzQuestions = [
        {
            question: 'What is react..',
            options: ['Css Framework', 'React library', 'React Framework', 'Testing tool'],
            answer: 'React library'

        },

        {
            question: 'What is the full form of CSS..',
            options: [
                'Cascading Style Sheet',
                'Cat Style Sheet',
                'Cascading sheet style',
                'Abcd',
            ],
            answer: 'Cascading Style Sheet'

        },

        {
            question: 'What is the full form of HTTP..',
            options: [
                'Hyper Text Tranfer Protocol',
                'Text Transfer protocol',
                'Hyper Text Markup Language',
                'Abcd',
            ],
            answer: 'Hyper Text Tranfer Protocol'

        },

    ]

    console.log(quizzQuestions);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [score,setScore]=useState(0)

    const handleClick = (v) => {
        setCurrentAnswer(v)
        if(v===quizzQuestions[currentQuestionIndex].answer){
            setScore(score+1)
        }
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setCurrentAnswer(null)
    }

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
        setCurrentAnswer(null)
    }


    return (
        <div>
            {currentQuestionIndex < quizzQuestions.length ?

                <div>
                    <h2>{quizzQuestions[currentQuestionIndex].question}</h2>
                    <ul>
                        {
                            quizzQuestions[currentQuestionIndex]?.options?.map((v) => (
                                <li onClick={() => handleClick(v)}>{v}</li>
                            ))
                        }
                        <li></li>
                    </ul>
                    <button disabled={currentAnswer === null} onClick={() => handlePrevQuestion()}>Prev</button>
                    <button disabled={currentAnswer === null} onClick={() => handleNextQuestion()}>Next</button>
                </div>
                :
              <h3>Your Score is {score}</h3>
            }



        </div>
    );
}

export default QuizzApp;