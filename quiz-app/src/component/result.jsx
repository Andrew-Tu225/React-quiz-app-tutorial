function Result({userAnswer, questionBank, restartQuiz}){

    function getScore(){
        let finalScore = 0;
        userAnswer.forEach((answer, index)=> {
            if (answer === questionBank[index].answer){
                finalScore += 1;
            }
        });
        return finalScore;
    }

    const score = getScore()

    return (
    <div>
        <h2>Quiz completed</h2>
        <p>Your Score: {score}/{questionBank.length}</p>
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
    );
}

export default Result;