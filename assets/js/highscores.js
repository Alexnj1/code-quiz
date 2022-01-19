
function fetchScore () {
    var highScoresList = document.querySelector('.high-scores-list')
    var highScores = JSON.parse(localStorage.getItem('HSvalue')) || []
    console.dir(highScores)

    var highScoreItem = document.createElement('li')
    highScoreItem.textContent = (highScores)
    highScoreItem.className = ('highscore-text')

    highScoresList.appendChild(highScoreItem)
}

fetchScore()