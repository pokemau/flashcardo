const questions = JSON.parse(localStorage.getItem('questions'));
const quesArr = JSON.parse(localStorage.getItem('quesArr'));

const fcDef = document.querySelector('.flashcard-def');
const fcAns = document.querySelector('.flashcard-ans');

//show a card with the question
function showCard() {
   const flashCard = document.querySelector('.flashcard-container');
   //questions
   if(quesArr.length > 0) {
      const {qAns, qDef} = getRandomQuestion();
      fcDef.textContent = qDef;
      flashCard.addEventListener('click', () => {
         fcAns.textContent = qAns;
      });
   }
};

function nextQuestion() {
   const nextBtn = document.querySelector('.next-btn');
   nextBtn.addEventListener('click', () => {
      if(quesArr.length > 0) {
         showCard();
         fcAns.textContent = '';
      }
   });
}

function getRandomQuestion() {
   const randNum = Math.floor(Math.random() * quesArr.length);
   const qAns = quesArr[randNum];
   const qDef = questions[qAns]
   quesArr.splice(randNum, 1);
   return {qAns, qDef};
}

nextQuestion();
showCard();