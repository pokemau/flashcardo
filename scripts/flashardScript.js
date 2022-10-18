const flashcardTitle = window.localStorage.getItem('flashcardTitle');
const cardDef = document.querySelector('.flashcard-def');
const cardAns = document.querySelector('.flashcard-ans');
const questions = JSON.parse(window.localStorage.getItem(flashcardTitle));
const quesArr = Object.keys(questions);

function showCard() {

   const showAns = document.querySelector('.show-ans-btn');

   if(quesArr.length > 0) {
      const {qAns, qDef} = getRandomQuestion();
      cardDef.textContent = qDef;
      showAns.addEventListener('click', () => {
         cardAns.textContent = qAns;
      });
   }


}

function getRandomQuestion() {
   const randNum = Math.floor(Math.random() * quesArr.length);
   const qAns = quesArr[randNum];
   const qDef = questions[qAns]
   quesArr.splice(randNum, 1);
   return {qAns, qDef};
}

function nextQuestion() {
   const nextBtn = document.querySelector('.next-btn');
   nextBtn.addEventListener('click', () => {
      if(quesArr.length > 0) {
         showCard();
         cardAns.textContent = '';
      } else {
         window.alert('No more questions');
      }
   });
}

nextQuestion();
showCard();