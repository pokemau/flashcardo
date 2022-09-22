const questions = {} //object for questions

function getQuestion() {
   const def = document.getElementById('def')
   const term = document.getElementById('term')
   const submitBtn = document.getElementById('submitBtn')
   const qCont = document.getElementById('qContainer')

   let numCount = 1

   //event listener for submit btn
   submitBtn.addEventListener('click', () => {
      const qDiv = document.createElement('div')
      qDiv.classList.add('qDiv')
      const q = document.createElement('p')

      if(term.value || def.value) {
         q.innerText = `${numCount}. ${term.value} - ${def.value}`
         questions[term.value] = def.value;
         def.value = ''
         term.value = ''
         qDiv.append(q)
         qCont.append(qDiv)
         numCount++
      }
   })
}

function startQuiz() {
   const startBtn = document.getElementById('startBtn')

   startBtn.addEventListener('click', ()=> {
      console.log(questions)
   })
}

startQuiz()
getQuestion()