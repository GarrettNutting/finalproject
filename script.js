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
      },

      {
        question: "4. How can you verify the legitimacy of a hyperlink in an email?",
        answers: {
          a: "Hover over the link to preview the destination URL before clicking",
          b: "Click on it to see where it leads",
          c: "Ignore hyperlinkins in emails", 
          d: "Share the link on social media for verification",
        },
        correctAnswer: "a"
      },

      {
        question: "5. What is pretexting in the context of social engineering?",
        answers: {
          a: "A form of texting.",
          b: "Creating a fabricated scenario to manipulate an individual into divluging confidential information",
          c: "Setting up a secure password",
          d: "Engaging in social media conversations",
        },
        correctAnswer: "b"
      },

      {
        question: "6. What makes spear phishing different from generic phishing?",
        answers: {
          a: "It involves fish",
          b: "It targets specific individuals or organizations",
          c: "It uses spears as hacking tools",
          d: "It only occurs in certain geographic location",
        },
        correctAnswer: "b"
      },

      {
        question: "7. What is vishing?",
        answers: {
          a: "A type of virtual reality fishing",
          b: "Video-based phishing attacks",
          c: "A form of phishing conducted over phone calls",
          d: "A method of securing voicemails",
        },
        correctAnswer: "c"
      },

      {
        question: "8. What is an insider threat?",
        answers: {
          a: "An individual within the organization who poses a risk by exploiting their position",
          b: "A person with access to confidential information",
          c: "Someone who loves social media",
          d: "A friendly colleague",
        },
        correctAnswer: "a"
      },

      
      {
        question: "9. Why is ongoing security awareness training important?",
        answers: {
          a: "To slow down work processes",
          b: "To educate individuals about evolving threats and tactics",
          c: "To increase the number of phishing attempts",
          d: "To discourage employees from reporting suspicious activities",

        },
        correctAnswer: "b"
      },

      
      {
        question: "10. How does multi-factor authentication enhance security against phishing",
        answers: {
          a: "It encourages more phishing attempts",
          b: "It makes passwords unnecessary",
          c: "It complicates the login process",
          d: "It adds an additional layer of verification beyond passwords",

        },
        correctAnswer: "d"
      },

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
  