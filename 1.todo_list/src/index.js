import addIcon from '../images/add.svg';
import deleteImg from '../images/delete.png'
import './index.css';

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input"); 
const todoList = document.getElementById("todo-list");

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  paintTodo(newTodo);
}

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
}

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  const deleteIcon = document.createElement("img");
  deleteIcon.src = deleteImg;
  button.appendChild(deleteIcon);
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleTodoSubmit);