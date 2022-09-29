const questions = JSON.parse(localStorage.getItem('questions'));
const quesArr = JSON.parse(localStorage.getItem('quesArr'));

//press next btn
//get random question not on the list
//new question shown to screen
const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
   getrandomQuestion();
});
function getrandomQuestion() {
   const qAns = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
   const qDef = questions[qAns];
};




//temp function to show questions
const showq = document.querySelector('.show-q');
showq.addEventListener('click', () => {
   // const qAns = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
   // const qDef = questions[qAns];
   
   // const t = `${qAns} - ${qDef}`;
   // console.log(t)

   console.log(quesArr);
});

//show a card with the question
function showCard() {
   const fcDef = document.querySelector('.flashcard-def');
   const fcAns = document.querySelector('.flashcard-ans');
   const flashCard = document.querySelector('.flashcard-container');
   const qAns = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)];
   const qDef = questions[qAns];

   fcDef.textContent = qDef;

   flashCard.addEventListener('click', () => {
      fcAns.textContent = qAns;
   });
};
//if clicked then the answer shows





showCard();