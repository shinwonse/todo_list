import 'styles/reset.css';
import 'styles/index.css';
import { paintToDo, TODOS_KEY, saveToDo, newToDoObjArr } from './features';

import { push } from './router';

push('/login');

// const rootDiv = document.getElementById('root');
// const toDoList = document.createElement('ul');
// toDoList.id = 'todo-list';
// toDoList.addEventListener('click', openModal);
// toDoList.insertAdjacentHTML('afterbegin', Search);
//
// toDoForm.insertAdjacentHTML('beforeend', toDoFormContents);
// toDoForm.addEventListener('submit', handleToDoSubmit);
//
// rootDiv.appendChild(toDoList);
// const searchInput = document.getElementById('search');
// searchInput.onkeyup = filter;

window.addEventListener('click', (e) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  e.target === modal ? rootDiv.removeChild(modal) : false;
});

window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  e.returnValue = '';
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
  }
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  saveToDo(newToDoObjArr);
  return;
});
