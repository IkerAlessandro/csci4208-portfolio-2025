const LeaderBoard = (list) => (
    `<div>
        <h2>Top Scores: </h2>
        <section>
            <ol>
                ${getItemsHTML(list)}
            </ol>
        </section>
    </div>`
);

const getItemsHTML = (list) => {
    const sortedScores = list.sort((a, b) => b.score - a.score);
    let htmlList= '';
    for (let item of sortedScores){
        htmlList += `<li>${item.name} : ${item.score}</li>`
    }
    return htmlList;
};

export default LeaderBoard;