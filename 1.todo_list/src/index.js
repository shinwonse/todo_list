import 'styles/reset.css';
import 'styles/index.css';
import {deleteToDo, handleToDoSubmit, paintToDo, TODOS_KEY, toDos} from './toDoFunction';
import addIcon from './assets/add.svg';

const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');
  const toDoList = document.getElementById('todo-list');

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

  toDoForm.insertAdjacentHTML('beforeend',toDoFormContents);
  rootDiv.appendChild(toDoForm);

  toDoForm.addEventListener('submit', handleToDoSubmit);
  // toDoList.addEventListener('click', deleteToDo);
}

init();

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(parsedToDo => toDos.push(parsedToDo));
  parsedToDos.forEach(paintToDo);
}

