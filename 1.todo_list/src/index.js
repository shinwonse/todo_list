import { addImg, title, todoForm, todoList } from './todoUI';

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  
}

const paintToDo = (newTodo) => {
  
}

const rootBody = document.getElementById("root");
rootBody.insertAdjacentHTML('afterbegin', title + todoForm + todoList);

const addButton = document.getElementById("add-button");
addButton.appendChild(addImg);
addButton.addEventListener('click', handleToDoSubmit);

const toDoInput = document.getElementById("todo-input");