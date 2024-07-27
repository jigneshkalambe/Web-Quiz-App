import React, { useState } from "react";
import questions from "../Components/QuizData";
import "../App.css";
import Result from "../Components/Result";
const Quiz = ({ setQuizRestart, setRightAns, rightAns }) => {
    const [currentInd, setCurrentInd] = useState(0);
    const Questions = questions[currentInd];
    const totalQuestions = questions.length;

    const nextQuestionHandler = () => {
        if (currentInd < totalQuestions - 1) {
            setCurrentInd(currentInd + 1);
        } else {
            setQuizRestart(true);
        }
    };

    const prevQuestionHandler = () => {
        if (currentInd > 0) {
            setCurrentInd(currentInd - 1);
        }
    };

    const ansCheckHandler = (isCorrect) => {
        if (isCorrect) {
            setRightAns(rightAns + 1);
        }
        nextQuestionHandler();
    };

    if (currentInd >= questions.length) {
        return <Result rightAns={rightAns} setQuizRestart={setQuizRestart} setRightAns={setRightAns}></Result>;
    }

    return (
        <div className="wrapper">
            <div className="quizBox">
                <div className="firstSec">
                    <h1>Quiz</h1>
                    <span>Test your knowledge with this fun quiz!</span>
                </div>
                <div className="secondSec">
                    <p>
                        Question {currentInd + 1} of {totalQuestions}
                    </p>
                    <h3>{Questions.questionText}</h3>
                </div>
                <div className="ansBtnBox">
                    {Questions.answerOptions?.map((options, optionsIND) => {
                        return (
                            <button onClick={() => ansCheckHandler(options.isCorrect)} className="ansBtn col-5" key={optionsIND}>
                                {options.answerText}
                            </button>
                        );
                    })}
                </div>
                <div className="d-flex navBtnBox justify-content-between mt-4">
                    <button onClick={prevQuestionHandler} className="prev">
                        <i className="bx bx-chevron-left"></i>
                    </button>
                    <button onClick={nextQuestionHandler} className="next">
                        <i className="bx bx-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
