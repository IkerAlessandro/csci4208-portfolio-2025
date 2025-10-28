import * as http from './http.js';
import * as view from './view.js';

const GET_TRIVIA = `https://opentdb.com/api.php?amount=1&difficulty=easy`;
const bin_url = `https://api.jsonbin.io/v3/b/68fd0affae596e708f2c1145`;

const state = {
    timer : 20,
    score : 0,
    trivia : null,
    response_code: null,
    top_scores: [],
    intervalID : null
};

const countDown = () => {
    if (state.timer){
        state.timer--;
        view.PlayScene(state);
    } else {
        clearInterval(state.intervalID);
        view.GameOverScene(state);
    }
}

window.createGame = () => {
    state.intervalID = setInterval(countDown, 1000);
    playGame();
}


window.playGame = async () => {
    const json = await http.sendGetRequest(GET_TRIVIA);
    state.response_code = json.response_code;
    console.log(json);
    if (json.response_code == 0)[state.trivia] = json.results;
    console.log(json.results[0].correct_answer);
    view.PlayScene(state);
};

window.start = async () => {
    const responseScores = await fetch(bin_url);
    const jsonScoresData = await responseScores.json();
    state.top_scores = jsonScoresData.record;
    state.timer = 20;
    state.score =  0;
    view.StartMenu(state);
}

window.checkAnswer = (attempt) => {
    const correct_answer = state.trivia.correct_answer;
    if (correct_answer == attempt){
        state.timer += 10;
        state.score += state.timer;
        playGame();
    } else {
        clearInterval(state.intervalID);
        view.GameOverScene(state);
    }
}

const getTop5 = async (newScore) => {
    const leaderboardJSON = await http.sendGetRequest(bin_url);
    const top5 = leaderboardJSON.record;
    top5.push( newScore )
    top5.sort((a, b) => b.score - a.score);
    top5.pop();
    return top5;
}
window.updateLeaderboard = async () => {
    const name = document.getElementById('name').value;
    const currentScore = {name:name, score: state.score};
    const top5 = await getTop5(currentScore);
    await http.sendPutRequest(bin_url, top5);
    start();
}

window.testPut = async () => {
    const data = [
        {name:'A', score:30 },
        {name:'B', score:20 },
        {name:'C', score:10 },
        {name:'D', score:5 },
        {name:'E', score:0 },
    ];
    await http.sendPutRequest(bin_url, data);
};

window.addEventListener('load', window.start);