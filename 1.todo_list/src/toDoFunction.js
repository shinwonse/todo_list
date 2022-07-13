import deleteIcon from './assets/delete.png';
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
    <li id=${newToDoObj.id}>
      <span>${newToDoObj.text}</span>
      <button>
        <img src=${deleteIcon} alt='delete' />
      </button>
    </li>
  `
  toDoList.insertAdjacentHTML('beforeend',toDo);
}

export const saveToDo = (newToDoObj) => {
  const test = localStorage.getItem(TODOS_KEY);
  console.log(test);
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
