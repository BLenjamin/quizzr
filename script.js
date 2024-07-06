let questions = [
    {
        "question": "Wer war der erste Kaiser Chinas?",
        "answer_1": "Kublai Khan",
        "answer_2": "Xi Jinping",
        "answer_3": "Qin Shi Huangdi",
        "answer_4": "Deng Xiaoping",
        "right_answer": 3
    },
    {
        "question": "Gegen welchen nomadischen Stamm siegte Otto der Große auf dem Lechfeld?",
        "answer_1": "Die Hunnen",
        "answer_2": "Die Magjaren",
        "answer_3": "Die Mongolen",
        "answer_4": "Die Cherokee",
        "right_answer": 2
    },
    {
        "question": "Aus welcher römischen Adelssippe stammte Caesar?",
        "answer_1": "Gens Julia",
        "answer_2": "Gens Flavia",
        "answer_3": "Gens Aemilia",
        "answer_4": "Gens Lucretia",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut wurde erfolgreichen chinesischen Kaisern nachgesagt?",
        "answer_1": "Die Authorität der Sterne",
        "answer_2": "Die Gunst der Götter",
        "answer_3": "Der Segen der Ahnen",
        "answer_4": "Das Mandat des Himmels",
        "right_answer": 4
    },
    {
        "question": "Welchen Titel trug Thomas Hobbes Werk über die Natur der Monarchie?",
        "answer_1": "Behemoth",
        "answer_2": "Gigant",
        "answer_3": "Leviathan",
        "answer_4": "Colossus",
        "right_answer": 3
    },
    {
        "question": "Auf welchem Schlachtfeld siegte Octavian über seine Rivalen Marcus Antonius & Cleopatra?",
        "answer_1": "Documentum",
        "answer_2": "Actium",
        "answer_3": "Imperium",
        "answer_4": "Katalaunische Felder",
        "right_answer": 2
    },
    {
        "question": "Aus welcher Provinz stammte der spätere Kaiser Napoleon I?",
        "answer_1": "Ile de France",
        "answer_2": "Korsika",
        "answer_3": "Provence",
        "answer_4": "Lothringen",
        "right_answer": 2
    },

];

function init() {
    document.getElementById('questions_total').innerHTML = questions.length;
    document.getElementById('question_current').innerHTML = currentQuestion+1;

    showCurrentQuestion();
}

let currentQuestion = 0;
let score = 0;

function showCurrentQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end_screen').style = '';
        document.getElementById('question_body').style = 'display: none';
        document.getElementById('correct_answers').innerHTML = score;
        document.getElementById('total_answers').innerHTML = questions.length;
        document.getElementById('hero_image').style.display = 'none';
    } else {
        
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
        
    let question = questions[currentQuestion];
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selectedAnswer) {
    let question = questions[currentQuestion];
    let selectedNumber = selectedAnswer.slice(-1);
    let correctAnswerId = "answer_" + question['right_answer'];

    if (selectedNumber == question['right_answer']) {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success');
        score++;
    } else {
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(correctAnswerId).parentNode.classList.add('bg-success');
    }
    document.getElementById('next_button').disabled = false;
}

function nextQuestion() {
    document.getElementById('next_button').disabled = true;
    currentQuestion++;
    document.getElementById('question_current').innerHTML = currentQuestion+1;
    showCurrentQuestion();
    resetOptions();
}

function resetOptions() {
    document.getElementById("answer_1").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_1").parentNode.classList.remove('bg-success');
    document.getElementById("answer_2").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_2").parentNode.classList.remove('bg-success');
    document.getElementById("answer_3").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_3").parentNode.classList.remove('bg-success');
    document.getElementById("answer_4").parentNode.classList.remove('bg-danger');
    document.getElementById("answer_4").parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('hero_image').style.display = 'block';
    currentQuestion = 0;
    score = 0;
    document.getElementById('end_screen').style.display = 'none';
    document.getElementById('question_body').style = 'display: block';
    init();
}