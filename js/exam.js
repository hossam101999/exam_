if (localStorage.getItem("instractor")) {
    window.location.href = "addquestions.html"
}

class Question {
    constructor(text, choices, correctAnswers) {
        this.text = text;
        this.choices = choices;
        this.correctAnswers = correctAnswers;
    }
}

class Answer {
    constructor(questionIndex, chosenAnswers) {
        this.questionIndex = questionIndex;
        this.chosenAnswers = chosenAnswers;
    }
}

let questionsArray = [
    new Question("1. Which HTML5 element is used for rendering vector graphics on a webpage?", ["<canvas>", "<svg>", "<video>", "<embed>", "<audio>"], ["<svg>"]),
    new Question("2. Which attribute is used in HTML5 to specify that an input field must be filled out before submitting the form?", ["required", "mandatory", "validate", "obligatory", "compulsory"], ["required"]),
    new Question("3. What is the purpose of the <picture> element in HTML5 and how is it used?", ["To define image maps", "To display a video", "To provide multiple sources for responsive images", "To link external stylesheets", "To create forms"], ["To provide multiple sources for responsive images"]),
    new Question("4. Which HTML5 element is used to specify a footer for a document or section of content?", ["<footer>", "<bottom>", "<section>", "<aside>", "<end>"], ["<footer>"]),
    new Question("5. What is the correct HTML element for playing audio files in an HTML5 webpage?", ["<audio>", "<sound>", "<music>", "<play>", "<media>"], ["<audio>"]),
    new Question("6. Which HTML attribute is used to define inline styles for an HTML element (TAG NAME)?", ["style", "css", "inline", "format", "design"], ["style"]),
    new Question("7. Which HTML5 element is used to define navigation links for a webpage's navigation bar?", ["<nav>", "<navigate>", "<navbar>", "<links>", "<navigation>"], ["<nav>"]),
    new Question("8. In HTML5, which element is used to specify a header for a document or section of content?", ["<header>", "<head>", "<h1>", "<section>", "<top>"], ["<header>"]),
    new Question("9. Which HTML5 element is used to embed a video in a webpage and allow playback?", ["<video>", "<media>", "<movie>", "<clip>", "<play>"], ["<video>"]),
    new Question("10. What is the correct HTML element for inserting a line break within text in HTML5?", ["<br>", "<lb>", "<break>", "<newline>", "<enter>"], ["<br>"]),
    new Question("11. Which CSS property is used to apply a shadow to text in a webpage?", ["text-shadow", "shadow-text", "font-shadow", "text-outline", "font-outline"], ["text-shadow"]),
    new Question("12. Which CSS property is used to set the distance between lines of text within an element?", ["line-height", "line-spacing", "line-distance", "text-height", "text-spacing"], ["line-height"]),
    new Question("13. Which CSS property is used to control the order of flex items within a flex container?", ["order", "flex-order", "item-order", "flex-item-order", "item-index"], ["order"]),
    new Question("14. Which CSS function is used to define a transformation that skews an element along the X and Y axes?", ["skew()", "skewX()", "skewY()", "transform-skew()", "skewXY()"], ["skew()"]),
    new Question("15. Which CSS property specifies how an element should float within its containing element?", ["float", "position", "alignment", "display", "placement"], ["float"]),
    new Question("16. Which CSS property is used to change the text color of an element on a webpage?", ["color", "font-color", "text-color", "text-style", "font-style"], ["color"]),
    new Question("17. Which CSS property controls the text size for an element within a webpage?", ["font-size", "text-size", "font-style", "text-style", "font-weight"], ["font-size"]),
    new Question("18. What is the default value of the position property in CSS and how does it affect elements?", ["static", "relative", "absolute", "fixed", "inherit"], ["static"]),
    new Question("19. Which method is used to add an event listener to an element in JavaScript code?", ["attachEvent", "addEventListener", "onEvent", "bindEvent", "setEventListener"], ["addEventListener"]),
    new Question("20. What does the 'this' keyword refer to in JavaScript and how is it used?", ["The current function", "The global object", "The current object", "The parent object", "The window object"], ["The current object"]),
    new Question("21. Which JavaScript method is used to write HTML content directly into a web page document?", ["document.write()", "document.print()", "console.log()", "window.write()", "window.print()"], ["document.write()"]),
    new Question("22. Which method is used to convert a JSON string into a JavaScript object and how is it applied?", ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()", "JSON.decode()"], ["JSON.parse()"]),
    new Question("23. Which function is used to execute a piece of JavaScript code after a specified delay in time?", ["setTimeout()", "setInterval()", "delay()", "wait()", "executeAfter()"], ["setTimeout()"]),
    new Question("24. Which method is used to remove the last element from an array in JavaScript and return it?", ["pop()", "push()", "shift()", "unshift()", "removeLast()"], ["pop()"]),
    new Question("25. Which method is used to check if an array includes a certain element within JavaScript code?", ["includes()", "contains()", "has()", "exists()", "find()"], ["includes()"]),
    new Question("26. What is the purpose of the 'strict mode' in JavaScript and how does it improve code quality?", ["To catch common coding mistakes", "To make the code run faster", "To make the code easier to read", "To prevent memory leaks", "To ensure compatibility with all browsers"], ["To catch common coding mistakes"]),
    new Question("27. Which method is used to add new elements to the end of an array in JavaScript programming?", ["push()", "pop()", "shift()", "unshift()", "add()"], ["push()"]),
    new Question("28. Which keyword is used to declare a variable in JavaScript, making it accessible within its scope?", ["var", "let", "const", "variable", "declare"], ["var"]),
    new Question("29. Which operator is used to assign a value to a variable in JavaScript programming language?", ["=", "==", "===", "=>", "<-"], ["="]),
    new Question("30. Which method is used to remove whitespace from both ends of a string in JavaScript code?", ["trim()", "slice()", "substring()", "replace()", "split()"], ["trim()"])
]
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const extaquation = JSON.parse(localStorage.getItem('extaquation')) || []
console.log(extaquation)
extaquation.forEach(function (e) {
    let quationText = e.question;
    let choiceArr = e.choices;
    let corectAns = e.correctAnswers;
    console.log(quationText, "0000000000000", choiceArr, "111111111111", corectAns);

    let newQuatation = new Question(quationText, choiceArr, corectAns);
    questionsArray.push(newQuatation);
});

const questions = shuffleArray(questionsArray);
const questionCount = questions.length;
let answeredQuestions = 0;
let currentQuestionIndex = 0;
let userAnswers = [];
let markedQuestions = [];
const main = document.getElementById("main")
const questionText = document.getElementById("questionText");
const choicesContainer = document.getElementById("choicesContainer");
const markedList = document.getElementById("markedList");
const prevButton = document.getElementById("prevButton");
const markButton = document.getElementById("markButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const timeLeftDisplay = document.getElementById("timeLeft");
const progressBar = document.getElementById("progressBar");
const gradesPage = document.getElementById("gradesPage");
const timeoutPage = document.getElementById("timeoutPage");
const gradesPercentageScore = document.getElementById("gradesPercentageScore");
const timeoutPercentageScore = document.getElementById("timeoutPercentageScore");
const gradesUserName = document.getElementById("gradesUserName");
const timeoutUserName = document.getElementById("timeoutUserName");
const examContainer = document.getElementById("examContainer");
const questionContainer= document.getElementById("questionContainer")
let totalTime = 30*60;
let timeLeft = totalTime;
console.log(gradesUserName, timeoutUserName)

const loadUserName = () => {
    const storedUserName = localStorage.getItem("userName");
    console.log(storedUserName);
    if (storedUserName) {
        document.getElementById("gradesUserName").textContent = storedUserName;
        document.getElementById("timeoutUserName").textContent = storedUserName;
    }
};
const loadData = () => {
    const storedTimeLeft = sessionStorage.getItem("timeLeft");
    const storedAnswers = sessionStorage.getItem("userAnswers");
    const storedQuestionIndex = sessionStorage.getItem("currentQuestionIndex");

    if (storedTimeLeft) {
        timeLeft = parseInt(storedTimeLeft, 10);
    }

    if (storedAnswers) {
        userAnswers = JSON.parse(storedAnswers);
    }

    if (storedQuestionIndex) {
        currentQuestionIndex = parseInt(storedQuestionIndex, 10);
    }
};

const saveData = () => {
    sessionStorage.setItem("timeLeft", timeLeft);
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    sessionStorage.setItem("currentQuestionIndex", currentQuestionIndex);
};

const updateTimerDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    progressBar.value = ((totalTime - timeLeft) / totalTime) * 100;
    sessionStorage.setItem("timeLeft", timeLeft);
};
const showTimeoutPage = () => {
    if (sessionStorage.getItem("examFinished") !== "true") {
        questionContainer.style.display = 'none';
        examContainer.style.display = "none";
        timer.style.display = 'none';
        markedList.style.display = 'none';
        timeoutPage.style.display = 'block';
        main.style.height = "80%";
    }
};

const startTimer = () => {
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (sessionStorage.getItem("examFinished") !== "true") {
                showTimeoutPage();
            }
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
}, 1000);
};
const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    choicesContainer.innerHTML = "";
    question.choices.forEach(choice => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = choice;
        input.name = "choices";
        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        choicesContainer.appendChild(label);
    });

    const answer = userAnswers.find(answer => answer.questionIndex === currentQuestionIndex);
    if (answer) {
        answer.chosenAnswers.forEach(chosenAnswer => {
            const checkbox = Array.from(document.getElementsByName("choices")).find(input => input.value === chosenAnswer);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
};

const saveAnswer = () => {
    const chosenAnswers = Array.from(document.getElementsByName("choices"))
        .filter(input => input.checked)
        .map(input => input.value);

    const existingAnswerIndex = userAnswers.findIndex(answer => answer.questionIndex === currentQuestionIndex);

    if (existingAnswerIndex !== -1) {
        userAnswers[existingAnswerIndex].chosenAnswers = chosenAnswers;
    } else {
        userAnswers.push(new Answer(currentQuestionIndex, chosenAnswers));
    }
    saveData();

    updateAnsweredQuestions();
};

const calculateScore = () => {
    let correctAnswersCount = 0;
    userAnswers.forEach(answer => {
        const question = questions[answer.questionIndex];
        if (JSON.stringify(question.correctAnswers.sort()) === JSON.stringify(answer.chosenAnswers.sort())) {
            correctAnswersCount++;
        }
    });
    return (correctAnswersCount / questions.length) * 100;
};
const updateAnsweredQuestions = () => {
    answeredQuestions = userAnswers.filter(answer => answer.chosenAnswers.length > 0).length;
    const remainingQuestions = questionCount - answeredQuestions;
    document.getElementById("answeredQuestionsCount").textContent = `Answered: ${answeredQuestions}`;
    document.getElementById("totalQuestionsCount").textContent = `Total: ${questionCount}`;
    document.getElementById("remainingQuestionsCount").textContent = `Remaining: ${remainingQuestions}`;
};

const showGradesPage = () => {
    const score = calculateScore();
    console.log(score)
    gradesPercentageScore.textContent = score.toFixed(2);
    examContainer.style.display = "none";
    main.style.height = "80%"
    gradesPage.style.display = "block";
    sessionStorage.setItem("examFinished", "true");
};

const updateButtons = () => {
    prevButton.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
};

const markQuestion = () => {
    if (!markedQuestions.includes(currentQuestionIndex)) {
        markedQuestions.push(currentQuestionIndex);
        updateMarkedList();
    }
};

const updateMarkedList = () => {
    markedList.innerHTML = "<h3>Marked Questions</h3>";
    markedQuestions.forEach((questionIndex, idx) => {
        const listItem = document.createElement("div");
        listItem.classList.add("marked-question");
        listItem.innerHTML = `<span>Question ${questionIndex + 1}</span><button class="unmark-button" onclick="unmarkQuestion(${questionIndex})"><i class="fa-sharp fa-solid fa-trash"></i></button>`;
        listItem.addEventListener("click", () => goToQuestion(questionIndex));
        markedList.appendChild(listItem);
    });
};

const goToQuestion = (questionIndex) => {
    saveAnswer();
    currentQuestionIndex = questionIndex;
    renderQuestion();
    updateButtons();
};

const unmarkQuestion = (questionIndex) => {
    const index = markedQuestions.indexOf(questionIndex);
    if (index !== -1) {
        markedQuestions.splice(index, 1);
        updateMarkedList();
    }
};

prevButton.addEventListener("click", () => {
    saveAnswer();
    currentQuestionIndex--;
    renderQuestion();
    updateButtons();
    updateAnsweredQuestions();
});

nextButton.addEventListener("click", () => {
    saveAnswer();
    currentQuestionIndex++;
    renderQuestion();
    updateButtons();
    updateAnsweredQuestions();
});

markButton.addEventListener("click", markQuestion);

submitButton.addEventListener("click", () => {
    saveAnswer();
    updateAnsweredQuestions();

    sessionStorage.setItem("examFinished", "true");
    showGradesPage();
    window.addEventListener("beforeunload", function (e) {
        e.preventDefault();
    });
});

window.addEventListener("load", () => {
    const examFinished = sessionStorage.getItem("examFinished");
    if (examFinished === "true") {
        showGradesPage();
    }
    loadUserName();
    updateAnsweredQuestions();
});



window.addEventListener("beforeunload", () => {
    saveAnswer();
});

loadUserName();
loadData();
renderQuestion();
updateButtons();
startTimer();
