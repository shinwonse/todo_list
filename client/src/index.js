import 'styles/reset.css';
import 'styles/index.css';
import form from 'styles/form.module.css';
import index from 'styles/index.module.css';
import {
  handleToDoSubmit,
  paintToDo,
  TODOS_KEY,
  showMoreOptions,
  deleteToDo,
  editToDo,
  saveToDo,
  newToDoObjArr,
} from './features';
import addIcon from './assets/add.svg';
import { openModal } from './modal';
import { filter, Search } from './search';
import DOMPurify from 'dompurify';

const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');

  const toDoFormContents = DOMPurify.sanitize(`
    <div class='${form.form}'>
      <h1 class='${form.title}'>TODO LIST</h1>
      <div class='${form.input__wrapper}'>
        <input class='${form.input}' id='todo-input' data-cy='input'>
          <button class='${form.button}' data-cy='input-button'>
            <img class='${form.button__img}' src='${addIcon}' alt='add'/>
          </button>
        </input>
      </div>
    </div>
  `);

  const toDoList = document.createElement('ul');
  toDoList.id = 'todo-list';
  toDoList.addEventListener('click', openModal);
  toDoList.insertAdjacentHTML('afterbegin', Search);

  toDoForm.insertAdjacentHTML('beforeend', toDoFormContents);
  toDoForm.addEventListener('submit', handleToDoSubmit);

  rootDiv.appendChild(toDoList);
  const searchInput = document.getElementById('search');
  searchInput.onkeyup = filter;
};

init();

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
