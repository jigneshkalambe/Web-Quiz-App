import React from "react";
import { Link } from "react-router-dom";
import "./Intropage.css";

const IntroPage = () => {
    return (
        <div className="intro_Main">
            <h1>Unlock Your Knowledge with Our Quizzes</h1>
            <p>Explore a wide range of quiz categories and challenge yourself to become a true trivia master.</p>
            <Link class="button-50" to="/quiz">
                Start Quiz
            </Link>
        </div>
    );
};

export default IntroPage;
