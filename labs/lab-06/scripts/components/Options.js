const BooleanAnswersHTML = (
    `<div>
        <button onclick="checkAnswer('True')">True</button>
        <button onclcik="checkAnswer('False')">False</button>
    </div>`
)

const MultiChoiceAnswerHTML = (trivia) => {
    const options = [trivia.correct_answer, ...trivia.incorrect_answers];
    const [a, b, c, d] = options.sort();

    return (
        `<div>
            <button onclick='checkAnswer("${a}")'>${a}</button>
            <button onclick='checkAnswer("${b}")'>${b}</button>
            <button onclick='checkAnswer("${c}")'>${c}</button>
            <button onclick='checkAnswer("${d}")'>${d}</button>
        </div>`
    )
}

const Options = (trivia) => {
    switch (trivia.type) {
        case 'multiple' : return MultiChoiceAnswerHTML(trivia);
        case 'boolean' : return BooleanAnswersHTML;
    }
};

export default Options;