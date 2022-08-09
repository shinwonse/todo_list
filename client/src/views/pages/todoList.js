import ToDoForm from '../components/toDoForm';
import submitToDo from '../../lib/submitToDo';
import openModal from '../../lib/openModal';

const TodoList = ToDoForm + `<ul id='todo-list'></ul>`;

window.onload = () => {
  const toDoForm = document.getElementById('todo-form');
  toDoForm.addEventListener('submit', submitToDo);
  const toDoList = document.getElementById('todo-list');
  toDoList.addEventListener('click', openModal);
};

export default TodoList;
