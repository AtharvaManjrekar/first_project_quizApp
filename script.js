const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;
let score = 0; // Added for tracking score
const scoreElement = document.createElement('p'); // Added for displaying score

startButton.addEventListener('click', startQuiz);

function startQuiz() {
  startButton.classList.add('hide');
  questionContainer.classList.remove('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.qs; // Corrected property name
  answerButtons.innerHTML = '';
  question.ans.forEach(answer => { // Corrected property name
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function updateScore() {
  score++; // Increment score
  scoreElement.innerText = `Score: ${score}`;
}

function selectAnswer(answer) {
  if (answer.correct) {
    updateScore();
  } else {
    // Handle wrong answer
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    // Quiz is finished
  }
}

const questions = [
  // qs 1
  {
    qs: "which one of this is a javascript framework?",
    ans: [
      { text: 'Python', correct: false },
      { text: 'DJango', correct: false },
      { text: 'React', correct: true },
      { text: 'Bootstrap', correct: false }

    ],
  },

  // qs 2
  {
    qs: "What does HTML stand for?",
    ans: [
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'DJango', correct: false },
      { text: 'React', correct: false },
      { text: 'Bootstrap', correct: false }

    ],
  },

  // qs 3
  {
    qs: "Which programming language is commonly used for adding interactivity to web pages?",
    ans: [
      { text: 'Python', correct: false },
      { text: 'Java', correct: false },
      { text: 'Ruby', correct: false },
      { text: 'JavaScript', correct: true }

    ],
  },

  // qs 4
  {
    qs: "What does CSS stand for?",
    ans: [
      { text: 'Computer Style Sheets', correct: false },
      { text: 'Creative Styling System', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Colorful Styling Styles', correct: false }

    ],
  },

  // qs 5
  {
    qs: " Which HTML tag is used to link an external CSS stylesheet?",
    ans: [
      { text: '<link>', correct: true },
      { text: '<style>', correct: false },
      { text: '<css>', correct: false },
      { text: '<stylesheet>', correct: false }

    ],
  },

  // qs 6
  {
    qs: " Which of the following is a version control system commonly used by developers?",
    ans: [
      { text: 'Git', correct: true },
      { text: 'SVN', correct: false },
      { text: 'Mercurial', correct: false },
      { text: 'CVS', correct: false }

    ],
  },

  // qs 7
  {
    qs: "Which term refers to making a website responsive to different screen sizes and devices?",
    ans: [
      { text: ' Dynamic layout', correct: false },
      { text: 'Adaptive design', correct: false },
      { text: ' Fixed layout', correct: false },
      { text: 'Responsive design', correct: true }

    ],
  },

  // qs 8 
  {
    qs: "Which element is used to define the structure and content of the web page's header?",
    ans: [
      { text: '<header>', correct: true },
      { text: '<head>', correct: false },
      { text: '<title>', correct: false },
      { text: '<h1>', correct: false }

    ],
  },

  // qs 9
  {
    qs: "Which HTTP status code indicates a successful request?",
    ans: [
      { text: '200 OK', correct: true },
      { text: '404 Not Found', correct: false },
      { text: '500 Internal Server Error', correct: false },
      { text: '302 Found', correct: false }

    ],
  },
  // qs 10
  {
    qs: `What is the purpose of a "media query" in CSS?`,
    ans: [
      { text: 'To query a database for media files', correct: false },
      { text: 'To style HTML elements', correct: false },
      { text: 'To apply different styles based on device characteristics', correct: true },
      { text: 'To create animations', correct: false }

    ],
  }

];

// Append score element to the container
document.querySelector('.container').appendChild(scoreElement);
