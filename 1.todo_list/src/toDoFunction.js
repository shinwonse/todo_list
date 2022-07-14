import moreIcon from './assets/more.svg';
import { nanoid } from 'nanoid';

export const TODOS_KEY = 'TODOS';
export const toDos = [];

export const handleToDoSubmit = (e) => {
  e.preventDefault();
  const toDoInput = document.getElementById("todo-input");
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: nanoid()
  };
  newToDo && (paintToDo(newToDoObj), saveToDo(newToDoObj));
};

export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  const toDo = `
    <li id=${newToDoObj.id} class='todo-li'>
      <span>${newToDoObj.text}</span>
      <button id='more-button'>
        <img src=${moreIcon} alt='more' />
      </button>
    </li>
  `
  toDoList.insertAdjacentHTML('beforeend',toDo);
}

export const saveToDo = (newToDoObj) => {
  const storedToDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  storedToDos.push(newToDoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(storedToDos));
};

export const deleteToDo = ({ target }) => {
  // Object.prototype.toString.call(type)
  if (!target.closest('button')) {
    return;
  }

  const li = target.parentElement.parentElement;
  const deleteIndex = toDos.findIndex(toDo => toDo.id === JSON.parse(li.id));
  toDos.splice(deleteIndex, 1);
  li.remove();
  saveToDo();
};

export const showMoreOptions = ({ target }) => {
  const modal = document.getElementById('modal-container');
  if (!target.closest('button')) {
    return;
  }
  modal.classList.add('show-modal');
}
