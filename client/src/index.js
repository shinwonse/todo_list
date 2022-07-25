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
} from './toDoFunction';
import addIcon from './assets/add.svg';
import { closeModal, modal } from './modal';
import DOMPurify from 'dompurify'

const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');

  const toDoFormContents = DOMPurify.sanitize(`
    <div class=${form.form}>
      <h1 class=${form.title}>TODO LIST</h1>
      <div class=${form.input__wrapper}>
        <input class=${form.input} id='todo-input'>
          <button class=${form.button}>
            <img class=${form.button__img} src=${addIcon} alt='add'/>
          </button>
        </input>
      </div>
    </div>
  `);

  const toDoList = document.createElement('ul');
  toDoList.id = 'todo-list';

  toDoForm.insertAdjacentHTML('beforeend', toDoFormContents);
  toDoForm.addEventListener('submit', handleToDoSubmit);

  rootDiv.appendChild(toDoList);
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
