import 'styles/reset.css';
import 'styles/index.css';
import { handleToDoSubmit, paintToDo, TODOS_KEY, toDos, showMoreOptions } from './toDoFunction';
import addIcon from './assets/add.svg';
import {closeModal, modal} from "./modal";

const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');

  const toDoFormContents = `
    <div id='content-wrapper'>
      <h1>TODO LIST</h1>
      <input id='todo-input'>
        <button id='add-button'>
          <img src=${addIcon} alt='add'/>
        </button>
      </input>
      <ul id='todo-list'>
    </div>
  `
  toDoForm.insertAdjacentHTML('beforeend', toDoFormContents);
  toDoForm.insertAdjacentHTML('beforeend', modal);
  toDoForm.addEventListener('submit', handleToDoSubmit);

  rootDiv.appendChild(toDoForm);

  const toDoList = document.getElementById('todo-list');
  const closeButton = document.querySelector('.close-button');
  toDoList.addEventListener('click', showMoreOptions)
  closeButton.addEventListener('click', closeModal);
}

init();

window.addEventListener('click', (e) => {
  const modalContainer = document.getElementById('modal-container');
  e.target === modalContainer ? modalContainer.classList.remove('show-modal') : false
})

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(parsedToDo => toDos.push(parsedToDo));
  parsedToDos.forEach(paintToDo);
}

