const questions = {}; //object for questions

function getQuestion() {
   const def = document.getElementById('def');
   const term = document.getElementById('term');
   const submitBtn = document.getElementById('submit-btn');
   const qCont = document.querySelector('.questions-list');
   //input fields
   const inputField = document.querySelector('.input-fields');
   const defCont = document.querySelector('.def-container');
   const ansCont = document.querySelector('.answer-container');

   let numCount = 1;

   //text field event listener
   //save question to object and show on page
   inputField.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
         e.preventDefault();
         if(defCont.textContent != '' && ansCont.textContent != '') {
            const qDiv = document.createElement('div');
            qDiv.classList.add('qDiv');
            const q = document.createElement('p');
            
            q.textContent = `${numCount}. ${ansCont.textContent} - ${defCont.textContent}`;
            questions[ansCont.textContent] = defCont.textContent;
            defCont.textContent = '';
            ansCont.textContent = '';

            qDiv.append(q);
            qCont.append(qDiv);
            numCount++;
         };
      };
   });
}

function startQuiz() {
   const startBtn = document.getElementById('startBtn')

   startBtn.addEventListener('click', ()=> {
      console.log(questions)
   })
}

startQuiz()
getQuestion()