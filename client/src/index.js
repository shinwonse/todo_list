import 'styles/reset.css';
import 'styles/index.css';
import {
  handleToDoSubmit,
  paintToDo,
  TODOS_KEY,
  showMoreOptions,
  deleteToDo,
  editToDo,
} from './toDoFunction';
import addIcon from './assets/add.svg';
import { closeModal, modal } from './modal';

const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');

  // BEM 모델 적용
  const toDoFormContents = `
    <div class='todo-form'>
      <h1 class='todo-form__title'>TODO LIST</h1>
      <input class='todo-form__input'>
        <button class='todo-form__button todo-form--submit'>
          <img src=${addIcon} alt='add'/>
        </button>
      </input>
    </div>
  `;

  const toDoList = document.createElement('ul');
  toDoList.className = 'todo-list'

  toDoForm.insertAdjacentHTML('beforeend', toDoFormContents);
  toDoForm.addEventListener('submit', handleToDoSubmit);

  rootDiv.appendChild(toDoForm);

  // const toDoList = document.getElementById('todo-list');
  const closeButton = document.querySelector('.close-button');
  const deleteButton = document.getElementById('delete-button');
  const editButton = document.getElementById('edit-button');
  toDoList.addEventListener('click', showMoreOptions);
  closeButton.addEventListener('click', closeModal);
  deleteButton.addEventListener('click', deleteToDo);
  editButton.addEventListener('click', editToDo);
};

init();

window.addEventListener('click', (e) => {
  const modalContainer = document.querySelector('.modal-container');
  e.target === modalContainer
    ? modalContainer.classList.remove('show-modal')
    : false;
});

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
}
