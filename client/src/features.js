import moreIcon from './assets/more.svg';
import list from 'styles/list.module.css';

export const TODOS_KEY = 'TODOS';
export const UNIQUE_ID_KEY = 'UNIQUE_ID';

import { openModal } from './modal.js';
import DOMPurify from 'dompurify';

export const newToDoObjArr = [];

export const handleToDoSubmit = (e) => {
  e.preventDefault();
  const toDoInput = document.querySelector('#todo-form input');
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const uniqueId = JSON.parse(localStorage.getItem(UNIQUE_ID_KEY)) || { id: 0 };
  const newToDoObj = {
    text: newToDo,
    id: uniqueId.id += 1,
  };
  localStorage.setItem(UNIQUE_ID_KEY, JSON.stringify(uniqueId));
  newToDo && (paintToDo(newToDoObj), newToDoObjArr.push(newToDoObj));
};

export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  const toDo = `
    <li id=${newToDoObj.id} class=${list.li}>
      <span>${newToDoObj.text}</span>
      <button id='modal-button' class=${list.button}>
        <img src=${moreIcon} alt='more' />
      </button>
    </li>
  `
  ;
  toDoList.insertAdjacentHTML('beforeend', toDo);
};

export const saveToDo = (newToDoObjArr) => {
  const storedToDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  newToDoObjArr.map(newToDoObj => {
    storedToDos.push(newToDoObj);
  });
  localStorage.setItem(TODOS_KEY, JSON.stringify(storedToDos));
};

export const deleteToDo = ({ target }, toDoId) => {
  if (!target.closest('button')) {
    return;
  }
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  const li = document.getElementById(toDoId);
  const toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const deleteIndex = toDos.findIndex(toDo => toDo.id === Number(toDoId));
  toDos.splice(deleteIndex, 1);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
  rootDiv.removeChild(modal);
};

// toDo 수정 시작하기
export const startEditToDo = ({ target }, toDoId) => {
  if (!target.closest('button')) {
    return;
  }
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  const li = document.getElementById(toDoId);
  const input = document.createElement('input');
  input.id = toDoId;
  input.style.position = 'absolute';
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateToDo(e.target.value, li.id);
    }
  });
  li.appendChild(input);
  rootDiv.removeChild(modal);
};

// toDo 수정 작업하기
export const updateToDo = (text, toDoId) => {
  const toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const replaceIndex = toDos.findIndex(toDo => toDo.id === Number(toDoId));
  toDos[replaceIndex].text = text;
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  const li = document.getElementById(toDoId);
  const input = li.querySelector('input');
  const span = li.querySelector('span');
  span.innerText = text;
  li.removeChild(input);
};
