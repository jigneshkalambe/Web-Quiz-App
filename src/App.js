import React, { useState } from "react";
// import Quiz from "./Components/Quiz";
// import Result from "./Components/Result";
import { Route, Routes } from "react-router-dom";
import IntroPage from "./Components/IntroPage";
import Layout from "./Components/Layout";

const App = () => {
    // const [quizRestart, setQuizRestart] = useState(false);
    // const [rightAns, setRightAns] = useState(0);

    return (
        <div>
            {/* {quizRestart === false ? (
                <Quiz rightAns={rightAns} setRightAns={setRightAns} setQuizRestart={setQuizRestart}></Quiz>
            ) : (
                <Result quizRestart={quizRestart} rightAns={rightAns} setRightAns={setRightAns} setQuizRestart={setQuizRestart}></Result>
            )} */}

            <Routes>
                <Route path="/" element={<IntroPage></IntroPage>}></Route>
                <Route path="/quiz" element={<Layout></Layout>}></Route>
            </Routes>
        </div>
    );
};

export default App;
