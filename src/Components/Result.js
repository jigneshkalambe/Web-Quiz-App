import React, { useState } from "react";
import questions from "./QuizData";
import "../App.css";

const Result = ({ quizRestart, setQuizRestart, rightAns, setRightAns }) => {
    const tryAgainHandler = () => {
        setRightAns(0);
        setQuizRestart(!quizRestart);
    };

    return (
        <div className="wrapper">
            <div className="resultBox">
                <h3>Quiz Result</h3>
                <div className="d-flex mb-3 justify-content-between">
                    <p className="m-0">Questions Answered Correctly</p>
                    <span>{rightAns}</span>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                    <p className="m-0">Total Questions</p>
                    <span>{questions.length}</span>
                </div>
                <div className="d-flex mt-3 justify-content-between">
                    <p>Score </p>
                    <span>{((rightAns / questions.length) * 100).toFixed(0)}%</span>
                </div>
                <div className="d-flex mt-3 justify-content-center">
                    <button className="retakeBtn" to="/" onClick={tryAgainHandler}>
                        Retake Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result;
