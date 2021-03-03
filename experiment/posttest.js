/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1.Which of the following are time-domain digital filters?", ///// Write the question inside double quotes
            answers: {
                a: "Offset filter", ///// Write the option 1 inside double quotes
                b: "Moving average filter",
                c: "Median filter",
                d: "All of the above",///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

   {
            question: "2.Which of the following is not a frequency domain digital filter?", ///// Write the question inside double quotes
            answers: {
                a: "Butterworth filter", ///// Write the option 1 inside double quotes
                b: "Detrending filter",
                c: "Notch/Comb filter",
                d: "Savitzy-Golay filter",///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
{
            question: "3.Techniques for bio signal pre-processing are:", ///// Write the question inside double quotes
            answers: {
                a: "Bandpass filter", ///// Write the option 1 inside double quotes
                b: "Independent Component Analysis",
                c: "Time Slice",
                d: "All of the above",///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
{
            question: "4.Low-pass filter retain:", ///// Write the question inside double quotes
            answers: {
                a: "High frequency signal", ///// Write the option 1 inside double quotes
                b: "Low frequency signal",
                c: "Both low and high frequency signal",
                d: "None of the above",///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

{
            question: "5.Common artefacts in a raw EEG signal are:", ///// Write the question inside double quotes
            answers: {
                a: "Ocular artifacts", ///// Write the option 1 inside double quotes
                b: "Muscle-movement artefacts",
                c: "Cardiac Artefacts",
                d: "All of the above",///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
