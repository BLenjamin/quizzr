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
    }

];

function init() {
    document.getElementById('questions_total').innerHTML = questions.length;
    showCurrentQuestion();
}

let currentQuestion = 0;

function showCurrentQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}