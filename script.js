const questions = {}; //object for questions
const questionArr = [];

function getQuestion() {
   const qCont = document.querySelector('.questions-list');
   const addBtn = document.querySelector('.add-btn');
   //input fields
   const inputField = document.querySelector('.input-fields');
   const defCont = document.querySelector('.def-container');
   const ansCont = document.querySelector('.answer-container');

   let numCount = 1;

   function addQuestion() {
      if(defCont.textContent != '' && ansCont.textContent != '') {
         const qDiv = document.createElement('div');
         qDiv.classList.add('qDiv');
         const q = document.createElement('p');
         
         q.textContent = `${numCount}. ${ansCont.textContent} - ${defCont.textContent}`;
         questions[ansCont.textContent] = defCont.textContent;
         questionArr.push(ansCont.textContent);
         defCont.textContent = '';
         ansCont.textContent = '';

         qDiv.append(q);
         qCont.append(qDiv);
         numCount++;
      };      
   }
   //button and text field event listener
   //save question to object and show on page
   addBtn.addEventListener('click', addQuestion);
   inputField.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
         e.preventDefault();
         addQuestion();
      }
   });
};

function startQuiz() {
   const startBtn = document.getElementById('start-btn');

   startBtn.addEventListener('click', ()=> {
      if(Object.keys(questions).length !== 0) {
         localStorage.setItem('questions', JSON.stringify(questions));
         localStorage.setItem('quesArr', JSON.stringify(questionArr));
         window.location.href = 'flashcard.html';
      }
   });
};


startQuiz()
getQuestion()