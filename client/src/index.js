import 'styles/reset.css';
import 'styles/index.css';
import { push } from './router';
import paintToDo from './lib/paintToDo';
import saveToDo from './lib/saveToDo';
import newToDoObjArr from './utils/newToDoObjArr';

push('/');

window.addEventListener('click', (e) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  e.target === modal ? rootDiv.removeChild(modal) : false;
});

window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const savedToDos = localStorage.getItem('TODOS');

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
  }
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  saveToDo(newToDoObjArr);
});
