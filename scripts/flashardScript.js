const flashcardTitle = window.localStorage.getItem('flashcardTitle');

const questions = JSON.parse(window.localStorage.getItem(flashcardTitle));

function showQuestion() {
   const cardDef = document.querySelector('.flashcard-def');
   const cardAns = document.querySelector('.flashcard-ans');


   const ansArr = Object.keys(questions);

   getRandomQuestion(cardDef, cardAns, ansArr);

}

function getRandomQuestion(cardDef, cardAns, ansArr) {
   const randomNum = Math.floor(Math.random() * ansArr.length);
   const showAnsBtn = document.querySelector('.show-ans-btn');
   const nextBtn = document.querySelector('.next-btn');

   cardDef.textContent = questions[ansArr[randomNum]];

   showAnsBtn.addEventListener('click', () => {
      cardAns.textContent = ansArr[randomNum];
   });

   nextBtn.addEventListener('click', () => {
      const randomNum = Math.floor(Math.random() * ansArr.length);

      console.log(randomNum)
   });
}


showQuestion();