// used this as a guide to build the quiz; changed some things to fit my needs: https://www.sitepoint.com/simple-javascript-quiz/

(function () {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
  
    const myQuestions = [
      {
        question: "1. A colleague requests your password via email, claiming an urgent need. What should you do?",
        answers: {
          a: "Share your password immediately",
          b: "Verify if the request with the colleague through another communication channel",
          c: "Ignore the request",
          d: "Change your password without confirmation",
  
        },
        correctAnswer: "b"
      },
      {
        question: "2. You receive an email with a link to update your bank account information. How do you verify its legitimacy?",
        answers: {
          a: "Click the link and provide the requested information",
          b: "Share the link on social media for public opinion",
          c: "Forward the email to colleagues for their opinion",
          d: "Verify the email sender and link authenticity before taking any action",
        },
        correctAnswer: "d"
      },
      {
        question: "3. You download a file from an unknown source. What precautions should you take to avoid malware?",
        answers: {
          a: "Open the file without any concerns",
          b: "Share the file with others to check its safety",
          c: "Scan the file with antivirus software before opening",
          d: "Disable antivirus software temporarily to speed up the download",
        },
        correctAnswer: "c"
      }
    ];
  
    function buildQuiz() {
      const output = [];
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question">${currentQuestion.question}</div>
          <div class="answers">${answers.join('')}</div>`
        );
      });
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainer.classList.add('correct');
        } else {
          answerContainer.classList.add('incorrect');
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();
  