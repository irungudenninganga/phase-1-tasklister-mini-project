document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let ulEl=document.getElementById('tasks')

  let inputEl = document.querySelector('form')

  let newTask=document.getElementById('new-task-description')
  inputEl.addEventListener('submit', (e) => {
    e.preventDefault()

    let liEl=document.createElement('li')
    liEl.innerHTML=newTask.value
    ulEl.appendChild(liEl)
    newTask.value=''

    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML='delete'
    liEl.appendChild(deleteBtn)
    deleteBtn.style.marginLeft='4px'
    deleteBtn.id='delete-btn'


    deleteBtn.addEventListener('click', () => {
      liEl.remove()
    })
  })


});

function deleteElement(){

}