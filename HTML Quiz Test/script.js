const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Home Tool Markup Language",
        b: "HyperText Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "None of these",
        correct: "b",
    },
    {
        question: "Choose the correct HTML element for the largest heading",
        a: "<h4>",
        b: "<h3>",
        c: "<h1>",
        d: "<heading>",
        correct: "c",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<break>",
        c: "<br></br>",
        d: "<br>",
        correct: "d",
    },
    {
        question: "How can you add CSS in HTML?",
        a: "with <body> tag",
        b: "with <style> tag",
        c: "with Javascript",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which element is used to preview on another page?",
        a: "target=_blank",
        b: "target=_new-page",
        c: "target=_new-window",
        d: "id=submit",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})