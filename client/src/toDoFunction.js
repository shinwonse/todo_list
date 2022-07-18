import moreIcon from './assets/more.svg';
import { nanoid } from 'nanoid';

export const TODOS_KEY = 'TODOS';

// 새로운 toDo가 submit됐을때
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

// toDo 그리기
export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  const toDo = `
    <li id=${newToDoObj.id} class='todo-li'>
      <span>${newToDoObj.text}</span>
      <button id='more-button'>
        <img src=${moreIcon} alt='more' />
      </button>
      <input id='edit-input'/>
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
