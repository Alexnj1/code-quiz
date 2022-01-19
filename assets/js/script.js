let questions = [
    {
        q : 'What are common data types supported by JavaScript?',
        c1 : 'Strings, Questions, Booleans',
        c2 : 'Strings, Functions, Questions',
        c3 : 'Booleans, Numbers, Objects',
        c4 : 'Symbols, Numbers, Functions',
    },
    {
        q : 'True or False, JavaScript is not case sensitive.',
        c1 : 'True',
        c2 : 'True but only inside functions',
        c3 : 'False',
        c4 : 'True but only when defining variables',
    },
    {
        q : 'What are the two scopes in JavaScript?',
        c1 : 'local and Variable',
        c2 : 'Variable and Object',
        c3 : 'Local and Global',
        c4 : 'Function and Local',
    },
    {
        q : 'How do you create an array in JavaScript?',
        c1 : 'var x = {}',
        c2 : 'var x = ()',
        c3 : 'var x = []',
        c4 : 'var x : []',
    },
    {
        q : 'How do you create a named function?',
        c1 : 'function () name {}',
        c2 : 'var function {}',
        c3 : 'function name() {}',
        c4 : 'var function () {}'
    },
    {
        q : 'How do you create an object?',
        c1 : 'var name {]',
        c2 : 'var name []',
        c3 : 'var name {}',
        c4 : 'var name ()'
    },
    {
        q : "what is 'This' referring to?",
        c1 : 'The variable it belongs to',
        c2: 'The function it belongs to',
        c3: 'The object it belongs to',
        c4 : 'All of the above'
    },
    {
        q : 'What is a callback?',
        c1 : 'A function to be executed directly before another',
        c2 : 'A function that gets an argument from another function',
        c3 : 'A function that is to be executed only after another is done',
        c4 : 'A function that is to be executed again as long as a certain criteria is reached'
    },
    {
        q : 'Which is NOT a rule to JavaScript variable naming conventions?',
        c1 : 'You must not use any reserved names',
        c2 : 'Names must not start with a number',
        c3 : 'Names must not begin with an underscore',
        c4 : 'Names must be treated as case sensitive'
    },
    {
        q : 'Which is NOT a way an HTML element can be accessed in JavaScript code?',
        c1 : 'getElementById()',
        c2 : 'getElementByClassName()',
        c3 : 'getElementdByTagName{}',
        c4 : 'quertSelector()'
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

    var target = event.target;
    
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
    var highScore = (initialsValue + ' - ' + playerScore + ' points')

    localStorage.setItem("HSvalue", JSON.stringify(highScore))
}


    



startButton.addEventListener('click', quizStart)
startButton.addEventListener('click', quizQuestions)
