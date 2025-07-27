import { useState } from "react";
import Result from "./result";
function Quiz(){
    const questionBank = [
        {
            question:"What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question:"What language is used for web-app?",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All",
        },
        {
            question:"What is the jsx stand for?",
            options: [
                "Javascript XML",
                "Java Syntax extension",
                "None of the above"
            ],
            answer: "Javascript XML",
        }
    ]

    const initialAnswer = [null,null,null];
    const [userAnswer, setUserAnswer] = useState(initialAnswer);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswer[currentQuestion];

    const [isQuizFinished, setIsQuizFinished] = useState(false);
    function handleSelectOption(option){
        const newUserAnswer = [...userAnswer];
        newUserAnswer[currentQuestion] = option;
        setUserAnswer(newUserAnswer);
    }

    function goToNext(){
        if (currentQuestion === questionBank.length-1){
            setIsQuizFinished(true);
        }
        else{
            setCurrentQuestion(currentQuestion + 1);
        }

    }

    function goToPrev(){
        setCurrentQuestion(currentQuestion - 1);
    }

    function restartQuiz(){
        setUserAnswer(initialAnswer);
        setCurrentQuestion(0);
        setIsQuizFinished(false);

    }
    if (isQuizFinished) {
        return <Result userAnswer={userAnswer} questionBank={questionBank} restartQuiz={restartQuiz}/>;
    }
    return (
    <div>
        <h2>Question {currentQuestion+1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option)=> (
            <button className={"option" + (selectedAnswer === option ? " selected":"")} onClick={() => handleSelectOption(option)}>
                {" "}
                {option}{" "}
                </button>
        ))}


        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion===0}> previous </button>
            <button onClick={goToNext} disabled={selectedAnswer===null}> 
                {currentQuestion === questionBank.length - 1 ? "Finish quiz": "Next"}
                </button>
            

        </div>
    </div>
    );
}

export default Quiz