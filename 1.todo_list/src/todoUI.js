import 'styles/reset.css';
import 'styles/index.css';
import addIcon from './assets/add.svg';

const title = '<h1>TODO LIST</h1>'
const todoForm = `
  <form id="todo-form">
    <input id="todo-input"/>
    <button id="add-button">
    </button>
  </form>
`
const todoList = `
  <ul id="todo-list">
  </ul>
`

const addImg = document.createElement("img");
addImg.style.background = `url(${addIcon})`;
addImg.style.width = '15px';
addImg.style.height = '15px';

export { title, todoForm, todoList, addImg };