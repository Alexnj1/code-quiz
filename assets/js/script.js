let questions = [
    {
        q : 'What are common data types suported by JavaScript?',
        c1 : 'Strings, Questions, Booleans',
        c2 : 'Strings, Functions, Questions',
        c3 : 'Booleans, Numbers, Objects',
        c4 : 'Symbols, Numbers, Functions',
        a : 'Booleans, Numbers, Objects'
    },
    {
        q : 'True or False, JavaScript is not case sensitive.',
        c1 : 'True',
        c2 : 'False',
        c3 : 'True but only inside functions',
        c4 : 'True but only when defining variables',
        a : 'False'
    },
    {
        q : 'What are the two scopes in JavaScript?',
        c1 : 'local and Variable',
        c2 : 'Variable and Object',
        c3 : 'Function and Local',
        c4 : 'Local and Global',
        a : 'local and Global'
    }
]

var questionNumber = 1
var playerScore = 0
var playerTime = 50
var mainBody = document.querySelector('body')
var startButton = document.querySelector('button')


function quiz (event) {
    function timer() {
        var timer = setInterval(function(){
            document.querySelector('.timer').innerHTML = "Time: " + playerTime + " seconds"
            playerTime --
            if (playerTime < 0) {
                clearInterval(timer)
            }
        }, 50)
    } 
    timer()

    var target = event.target
    var welcomeMessage = document.querySelector('.intro');
    welcomeMessage.style.display = 'none'
    console.dir(target)

    var questionContainer = document.createElement('div');
    questionContainer.className = ('question-container');
    questionContainer.id = questionNumber;

    var question = document.createElement('h3');
    question.textContent = questions[0].q;

    var choicesContainer = document.createElement('ul');
    choicesContainer.className = ('answer-choices');

    var choiceOne = document.createElement('li');
    choiceOne.setAttribute('data-result', 'correct');
    var choiceTwo = document.createElement('li');
    choiceTwo.setAttribute('data-result', 'correct');
    var choiceThree = document.createElement('li');
    choiceThree.setAttribute('data-result', 'correct');
    var choiceFour = document.createElement('li');
    choiceFour.setAttribute('data-result', 'correct');
}

startButton.addEventListener('click', quiz)