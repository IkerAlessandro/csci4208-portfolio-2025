import Question from "./components/Question.js";
import HUD from "./components/HUD.js"
import SkipButton from "./components/Skip.js";
import RequestAlert from "./components/RequestAlert.js";
import LeaderBoard from "./components/LeaderBoard.js";
import LeaderMenu from "./components/LeaderMenu.js";

const renderDOM = (html) => document.getElementById('view').innerHTML = html;
const isTop5 = (score, top5) => top5.some( item => item.score < score );

export const StartMenu = (props) => {
    const {timer, score, top_scores} = props;
    renderDOM(
        `${HUD(timer,score)}
        ${LeaderBoard(top_scores)} 
        <hr>
        <button onclick='createGame()'>Play</button>`
    )
};

export const PlayScene = (props) => {
    const {trivia, timer, score, response_code} = props;
    renderDOM(
        `${HUD(timer, score)}
        ${Question(trivia)}
        ${SkipButton()}
        ${RequestAlert(response_code)}`
    );
};

export const GameOverScene = (props) => {
    const {timer, score, top_scores} = props;
    renderDOM(
        `${HUD(timer, score)}
        ${isTop5(score, top_scores) ? LeaderMenu() : ''}
        <h1>Game Over!</h1>
        <button onclick='start()'>Start Menu</button>`
    );
};

