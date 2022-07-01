import { getCreateDeleteButton, getCreateElement } from "./toDoUI";
import deleteIcon from 'assets/delete.png';
import { toDos, TODOS_KEY } from ".";

export const handleToDoSumit = (e) => {
  console.log(toDos);
  e.preventDefault();
  const toDoInput = document.getElementById("todo-input");
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now() + Math.random(),
  };
  newToDo === '' ? null : (toDos.push(newToDoObj), paintToDo(newToDoObj), saveToDo());
};

export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById("todo-list");
  const li = getCreateElement("li");
  const span = getCreateElement("span", newToDoObj.text);
  const deleteButton = getCreateDeleteButton(deleteIcon);

  deleteButton.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
};

export const saveToDo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

export const deleteToDo = (e) => {
  const li = e.target.parentElement.parentElement;
  li.remove();
  saveToDo();
};

