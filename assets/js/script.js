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
var playerTime = 90
var mainBody = document.querySelector('body')
var startButton = document.querySelector('button')
var highScore = document.querySelector('.high-scores')
var i = 0

function quizStart () {
    
    var welcomeMessage = document.querySelector('.intro');
    welcomeMessage.style.display = 'none'

    function timer() {
        var timer = setInterval(function(){
            document.querySelector('.timer').innerHTML = "Time: " + playerTime + " seconds"
            playerTime --
            var questionContainer = document.querySelector('.question-container')
            if (playerTime < 0) {
                clearInterval(timer)
                questionContainer.style.display = 'none'
                endQuiz()
            }
        }, 1000)
    } 
    timer()

    // quizQuestions()
}




function quizQuestions () {

    var questionContainer = document.createElement('div');
    questionContainer.className = ('question-container');
    questionContainer.id = questionNumber;

    var question = document.createElement('h3');
    question.className = ('question')
    question.textContent = questions[i].q;

    var choicesContainer = document.createElement('ul');
    choicesContainer.className = ('answer-choices');

    var choiceOne = document.createElement('button');
    choiceOne.className = ('incorrect1');
    choiceOne.textContent = questions[i].c1
    var choiceTwo = document.createElement('button');
    choiceTwo.className = ('incorrect2');
    choiceTwo.textContent = questions[i].c2
    var choiceThree = document.createElement('button');
    choiceThree.className = ('correct');
    choiceThree.textContent = questions[i].c3
    var choiceFour = document.createElement('button');
    choiceFour.className = ('incorrect3');
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

function answerChoices (event) {
    //debugger
    var target = event.target;
    // debugger
    
    if (target.matches(".correct")) {
        console.dir(target);
        playerScore += 10
        questionNumber ++
        i++
        changeQuestion()
    }else if (target.matches(".incorrect1")) {
        console.log('incorrect')
        playerTime -=10
        questionNumber ++
        i++
        changeQuestion()
    }else if (target.matches(".incorrect2")) {
        console.log('incorrect')
        playerTime -=10
        questionNumber ++
        i++
        changeQuestion()
    }else if (target.matches(".incorrect3")) {
        console.log('incorrect')
        playerTime -=10
        questionNumber ++
        i++
        changeQuestion()
    }
        
}

function changeQuestion() { 
    //debugger
    console.log('hi');
    if (i<questions.length) {
    var nextQuestion = document.querySelector('.question')
    nextQuestion.textContent = questions[i].q

    var nextAnswer1 = document.querySelector('.incorrect1')
    nextAnswer1.textContent = questions[i].c1
    var nextAnswer2 = document.querySelector('.incorrect2')
    nextAnswer2.textContent = questions[i].c2
    var nextAnswer3 = document.querySelector('.correct')
    nextAnswer3.textContent = questions[i].c3
    var nextAnswer4 = document.querySelector('.incorrect3')
    nextAnswer4.textContent = questions[i].c4
    }else {
        endQuiz()
    }
    

}
// try to create a new function to handle a click event on the list elements. maybe use query selector along the way somehow?

function endQuiz() {
    var questionContainer = document.querySelector('.question-container')
    questionContainer.style.display = 'none'
    var timer = document.querySelector('.timer')
    timer.style.display = 'none'
    var end = document.createElement('section')
    end.className = ('end-container');
    

    var endAnnouncement = document.createElement('h3');
    endAnnouncement.className = ('end-announcement');
    endAnnouncement.textContent = ('The quiz is now over!')

    var endMessage = document.createElement('p');
    endMessage.className = ('end-message');
    if (playerScore > 70) {
        endMessage.innerHTML = ('You have a score of ' + playerScore + ', good job! <br> You can choose to save your score or view other high scores');   
    }else if (playerScore < 70) {
        endMessage.innerHTML = ('You have a score of ' + playerScore + ', good try! better luck next time! <br> You can choose to save your score or view other high scores')        
    }

    var saveButton = document.createElement("button")
    saveButton.className = ('save-button');
    saveButton.textContent = ('Save Score')

    end.appendChild(endAnnouncement);
    end.appendChild(endMessage);
    end.appendChild(saveButton);

    mainBody.appendChild(end)
    
    saveButton.addEventListener('click', saveScore);
}

function saveScore () {
    var end = document.querySelector('.end-container')
    end.style.display = 'none'

    var scoreSaveArea = document.createElement('section')
    scoreSaveArea.className = ('score-save-area')

    var promptTitle = document.createElement('h3');
    promptTitle.className = ('prompt-title')
    promptTitle.textContent = ('Saving your score...')

    var promptText = document.createElement('p');
    promptText.className = ('prompt-text');
    promptText.textContent = ('Please enter your initials and press the SAVE button')

    var initialsArea = document.createElement('textarea');
    initialsArea.id = ("initials-area");

    var submitButton = document.createElement('button');
    submitButton.className = ('submit-button');
    submitButton.textContent = ('SAVE') 
    

    scoreSaveArea.appendChild(promptTitle);
    scoreSaveArea.appendChild(promptText);
    scoreSaveArea.appendChild(initialsArea);
    scoreSaveArea.appendChild(submitButton);
    mainBody.appendChild(scoreSaveArea);

    submitButton.addEventListener('click', storeScore)
}

function storeScore() {
    document.querySelector('.submit-button').innerHTML = 'Saved!'
    var initialsValue = document.querySelector('#initials-area').value
    console.dir (initialsValue)
    localStorage.setItem(initialsValue, JSON.stringify(playerScore))
}

function fetchScore () {
    
}
  
    



startButton.addEventListener('click', quizStart)
startButton.addEventListener('click', quizQuestions)
highScore.addEventListener('click', fetchScore)