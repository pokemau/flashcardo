function newQuestion() {
   const def = document.getElementById('def')
   const term = document.getElementById('term')
   const submitBtn = document.getElementById('submitBtn')
   const qCont = document.getElementById('qContainer')

   //event listener for submit btn
   submitBtn.addEventListener('click', () => {
      const qDiv = document.createElement('div')
      qDiv.classList.add('qDiv')
      const newDef = document.createElement('p')
      const newTerm = document.createElement('p')

      newDef.innerText = def.value
      newTerm.innerText = term.value
      def.value = ''
      term.value = ''

      qDiv.append(newDef, newTerm)
      qCont.append(qDiv)
   })
}



newQuestion()