let correctAnswers = [];

function toggleCorrectAnswer(choiceNumber) {
    const choiceId = `choice${choiceNumber}`;
    const button = document.getElementById(`correct${choiceNumber}`);
    
    if (correctAnswers.includes(choiceId)) {
        correctAnswers = correctAnswers.filter(answer => answer !== choiceId);
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.transform = '';
    } else {
        correctAnswers.push(choiceId);
        button.style.backgroundColor = 'lightblue';
        button.style.color = 'black';
        button.style.transform = 'scale(1.1)';
    }
}

function addQuestion() {
    const question = document.getElementById('question').value.trim();
    if (question === '') {
        alert('Please enter your question');
        return;
    }

    const choices = [
        document.getElementById('choice1').value.trim(),
        document.getElementById('choice2').value.trim(),
        document.getElementById('choice3').value.trim(),
        document.getElementById('choice4').value.trim(),
        document.getElementById('choice5').value.trim()
    ].filter(choice => choice !== '');
    
    if (choices.length < 2) {
        alert('Please enter at least two choices');
        return;
    }
    
    const questionObject = {
        question,
        choices,
        correctAnswers: correctAnswers.map(answer => {
            const index = parseInt(answer.replace('choice', ''), 10) - 1;
            return choices[index];
        }).filter(answer => answer !== undefined) 
    };
    
    let extaquation = JSON.parse(localStorage.getItem('extaquation')) || [];
    extaquation.push(questionObject);
    localStorage.setItem('extaquation', JSON.stringify(extaquation));
    clearForm();
}

function clearForm() {
    document.getElementById('question').value = '';
    document.getElementById('choice1').value = '';
    document.getElementById('choice2').value = '';
    document.getElementById('choice3').value = '';
    document.getElementById('choice4').value = '';
    document.getElementById('choice5').value = '';
    correctAnswers = [];
    document.querySelectorAll('.button-container button').forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.transform = '';
    });
}