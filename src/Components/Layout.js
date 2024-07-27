import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
const Layout = () => {
    const [quizRestart, setQuizRestart] = useState(false);
    const [rightAns, setRightAns] = useState(0);
    return (
        <div>
            {quizRestart === false ? (
                <Quiz rightAns={rightAns} setRightAns={setRightAns} setQuizRestart={setQuizRestart}></Quiz>
            ) : (
                <Result quizRestart={quizRestart} rightAns={rightAns} setRightAns={setRightAns} setQuizRestart={setQuizRestart}></Result>
            )}
        </div>
    );
};

export default Layout;
