import moreIcon from './assets/more.svg';
import list from 'styles/list.module.css';

export const TODOS_KEY = 'TODOS';
export const UNIQUE_ID_KEY = 'UNIQUE_ID';

import DOMPurify from 'dompurify'

export const handleToDoSubmit = (e) => {
  e.preventDefault();
  const toDoInput = document.querySelector('#todo-form input');
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const uniqueId = JSON.parse(localStorage.getItem(UNIQUE_ID_KEY)) || { id: 0 };
  const newToDoObj = {
    text: newToDo,
    id: uniqueId.id += 1
  };
  localStorage.setItem(UNIQUE_ID_KEY, JSON.stringify(uniqueId));
  newToDo && (paintToDo(newToDoObj), saveToDo(newToDoObj));
};

export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  const toDo = `
    <li id=${newToDoObj.id} class=${list.li}>
      <span>${newToDoObj.text}</span>
      <button class=${list.button}>
        <img src=${moreIcon} alt='more' />
      </button>
    </li>
  `
  toDoList.insertAdjacentHTML('beforeend',toDo);
}

// toDo에 변경사항이 생기고 저장할때
export const saveToDo = (newToDoObj) => {
  const storedToDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  storedToDos.push(newToDoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(storedToDos));
};

// toDo 삭제하기
export const deleteToDo = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const modal = document.querySelector('.modal-container');
  const li = document.getElementById(modal.id);

  const toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const deleteIndex = toDos.findIndex(toDo => toDo.id === li.id);
  toDos.splice(deleteIndex, 1);

  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
  modal.classList.remove('show-modal');
};

// toDo 수정 시작하기
export const editToDo = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const modal = document.querySelector('.modal-container');
  const li = document.getElementById(modal.id);
  const input = li.querySelector('input');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateToDo(e.target.value, li.id);
    }
  });
  input.style.display = 'block';
  modal.classList.remove('show-modal');
}

// toDo 수정 작업하기
export const updateToDo = (text, toDoId) => {
  const toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const replaceIndex = toDos.findIndex(toDo => toDo.id === toDoId);
  toDos[replaceIndex].text = text;
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

  const modal = document.querySelector('.modal-container');
  const li = document.getElementById(modal.id);
  const input = li.querySelector('input');
  input.style.display = 'none';
  const span = li.querySelector('span');
  span.innerText = text;
}

// 모달 띄우기
export const showMoreOptions = ({ target }) => {
  const modal = document.querySelector('.modal-container');
  const li = target.closest('li');
  if (!target.closest('button')) {
    return;
  }
  modal.id = li.id;
  modal.classList.add('show-modal');
}
