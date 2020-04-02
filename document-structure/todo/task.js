const tasks__list = document.querySelector('div.tasks__list');
let tasks = document.querySelectorAll('a.task__remove');

document.querySelector('#tasks__add').addEventListener('click', (event) => {
  let currValue = document.querySelector('#task__input');
  if (currValue.value != '') {
    let newTask = document.createElement('div');
    newTask.classList.add('task_container');
    newTask.innerHTML = ('<div class="task"><div class="task__title">' + currValue.value + '</div><a href="#" class="task__remove">&times;</a></div>');
    tasks__list.appendChild(newTask);
    currValue.value = '';
    event.preventDefault();  
    tasks = document.querySelectorAll('a.task__remove'); 
    tasks.forEach(function(task) {
      task.addEventListener('click', taskDeleteHandler);
    });
  };
});

const taskDeleteHandler = function(event) {
  let task = event.target;
  task.parentElement.parentElement.remove() 
};
