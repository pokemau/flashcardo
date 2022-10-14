const questions = {}; //object for questions
const questionArr = [];

function createNewFlashcard() {
   const flaschardTitle = document.querySelector('.title-container');
   const addNewBtn = document.querySelector('.add-title-btn');

   plainText(flaschardTitle);


   flaschardTitle.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
         e.preventDefault();
         if(flaschardTitle.textContent !== '') {
            const title = flaschardTitle.textContent;
            window.localStorage.setItem('flashcardTitle', title);
            window.location.href = './pages/edit-questions.html';
            flaschardTitle.textContent = '';
         };
      }
   });

   addNewBtn.addEventListener('click', () => {
      if(flaschardTitle.textContent !== '') {
         const title = flaschardTitle.textContent;
         window.localStorage.setItem('flashcardTitle', title);
         window.location.href = './pages/edit-questions.html';
         flaschardTitle.textContent = '';
      };
   });
}


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


function showPreviousSets() {
   const sets = JSON.parse(window.localStorage.getItem('flashcardSets'));
   const prevContainer = document.querySelector('.previous-cards-container');

   if(sets !== null) {
      sets.forEach(el => {
         const question = document.createElement('div');
         const delContainer = document.createElement('div');
         const delBtn = document.createElement('button');
   
         question.classList.add('question');
         question.textContent = el;
         delContainer.classList.add('del-btn-container');
         delBtn.classList.add('del-btn');
         delBtn.textContent = 'del';
   
         delContainer.append(delBtn);
         question.append(delContainer);
         prevContainer.append(question);
      });
   }



}


showPreviousSets();
createNewFlashcard();