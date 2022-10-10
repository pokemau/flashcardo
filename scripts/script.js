const questions = {}; //object for questions
const questionArr = [];

console.log

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
      if(Object.keys(questions).length != 0) {
         window.localStorage.setItem('questions', JSON.stringify(questions));
         window.localStorage.setItem('quesArr', JSON.stringify(questionArr));
         window.location.href = 'flashcard.html';
      }
   });
};

//allow only to paste plain text to input fields
const def = document.querySelector('.def-container');
const ans = document.querySelector('.answer-container');
function plainText(inputField) {
   inputField.addEventListener('paste', e => {
      e.preventDefault();

      const text = e.clipboardData
         ? (e.originalEvent || e).clipboardData.getData('text/plain')
         : // For IE
         window.clipboardData
         ? window.clipboardData.getData('Text')
         : '';

      if (document.queryCommandSupported('insertText')) {
         document.execCommand('insertText', false, text);
      } else {
         // Insert text at the current position of caret
         const range = document.getSelection().getRangeAt(0);
         range.deleteContents();

         const textNode = document.createTextNode(text);
         range.insertNode(textNode);
         range.selectNodeContents(textNode);
         range.collapse(false);

         const selection = window.getSelection();
         selection.removeAllRanges();
         selection.addRange(range);
      }
   });
}

function startPreviousCards() {
   const previous = document.querySelector('.previous');
   const prevQuestions = JSON.parse(window.localStorage.getItem('questions'));
   const prevQuesArr = JSON.parse(window.localStorage.getItem('quesArr'));

   if(prevQuestions !== null) {
      const firstQues = prevQuesArr[0]
      previous.innerHTML = `${firstQues} - ${prevQuestions[firstQues]}`;
      previous.addEventListener('click', () => {
         window.location.href = 'flashcard.html';
      });
   }

}
startPreviousCards();







plainText(def);
plainText(ans);


startQuiz();
getQuestion();