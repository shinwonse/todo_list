import 'styles/reset.css';
import 'styles/index.css';
import addIcon from 'assets/add.svg';
import { getCreateAddButton, getCreateElement } from './toDoUI';
import { handleToDoSumit, paintToDo } from './toDoFunction';

export const TODOS_KEY = 'TODOS';
export const toDos = [];

// 투두리스트에 필요한 element들을 생성
const init = () => {
  const rootDiv = document.getElementById("root");
  const toDoForm = document.getElementById("todo-form");

  const title = getCreateElement("h1", "TODO LIST");
  const toDoInput = getCreateElement("input");
  const toDoList = getCreateElement("ul", '', 'todo-list');
  toDoInput.id = "todo-input";
  const addButton = getCreateAddButton(addIcon);

  toDoForm.appendChild(toDoInput);
  toDoForm.appendChild(addButton);
  toDoForm.addEventListener('submit', handleToDoSumit); // input과 button에게 이벤트 위임

  rootDiv.appendChild(title);
  rootDiv.appendChild(toDoForm);
  rootDiv.appendChild(toDoList);
}

init();

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(parsedToDo => toDos.push(parsedToDo));
  parsedToDos.forEach(paintToDo);
}