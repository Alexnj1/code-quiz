let questions = [
    {
        q : 'What are common data types supported by JavaScript?',
        c1 : 'Strings, Questions, Booleans',
        c2 : 'Strings, Functions, Questions',
        c3 : 'Booleans, Numbers, Objects',
        c4 : 'Symbols, Numbers, Functions',
        a : 'Booleans, Numbers, Objects'
    },
    {
        q : 'True or False, JavaScript is not case sensitive.',
        c1 : 'True',
        c2 : 'True but only inside functions',
        c3 : 'False',
        c4 : 'True but only when defining variables',
        a : 'False'
    },
    {
        q : 'What are the two scopes in JavaScript?',
        c1 : 'local and Variable',
        c2 : 'Variable and Object',
        c3 : 'Local and Global',
        c4 : 'Function and Local',
        a : 'local and Global'
    }
]

var questionNumber = 1
var playerScore = 0
var playerTime = 50
var mainBody = document.querySelector('body')
var startButton = document.querySelector('button')


function quizStart () {
    
    var welcomeMessage = document.querySelector('.intro');
    welcomeMessage.style.display = 'none'

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

    // quizQuestions()
}


function quizQuestions () {
debugger
    for (i=0; i<questionNumber; i++) {
        var questionContainer = document.createElement('div');
        questionContainer.className = ('question-container');
        questionContainer.id = questionNumber;

        var question = document.createElement('h3');
        question.textContent = questions[i].q;

        var choicesContainer = document.createElement('ul');
        choicesContainer.className = ('answer-choices');

        var choiceOne = document.createElement('button');
        choiceOne.className = ('incorrect');
        choiceOne.textContent = questions[i].c1
        var choiceTwo = document.createElement('button');
        choiceTwo.className = ('incorrect');
        choiceTwo.textContent = questions[i].c2
        var choiceThree = document.createElement('button');
        choiceThree.className = ('correct');
        choiceThree.textContent = questions[i].c3
        var choiceFour = document.createElement('button');
        choiceFour.className = ('incorrect');
        choiceFour.textContent = questions[i].c4

        choicesContainer.appendChild(choiceOne);
        choicesContainer.appendChild(choiceTwo);
        choicesContainer.appendChild(choiceThree);
        choicesContainer.appendChild(choiceFour);

        questionContainer.appendChild(question);
        questionContainer.appendChild(choicesContainer);

        mainBody.appendChild(questionContainer);

        
        questionContainer.addEventListener('click', answerChoices)

        
    }
    
}
function answerChoices (event) {
            var target = event.target;
            var questionContainer = document.querySelector('.question-container')
            if (target.matches(".correct")) {
                console.dir(target)
                playerScore ++
                questionContainer.style.display = 'none'
                questionNumber ++
            }
        
        }
// try to create a new function to handle a click event on the list elements. maybe use query selector along the way somehow?


  
    



startButton.addEventListener('click', quizStart)
startButton.addEventListener('click', quizQuestions)