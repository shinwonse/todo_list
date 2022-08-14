import 'styles/reset.css';
import 'styles/index.css';
import { push } from './lib/router';
import submitToDo from './services/todo/submitToDo';
import openModal from './services/todo/openModal';
import { router } from './router';
router();

const observeUrl = () => {
  const observer = new MutationObserver(() => {
    if (location.pathname === '/login') {
      const button = document.getElementById('login-btn');
      button.addEventListener(
        'click',
        () => (location.href = 'http://localhost:3000/login/github/start')
      );
    }
    if (location.pathname === '/') {
      const data = response.data;
      console.log(data);
      const toDoForm = document.getElementById('todo-form');
      toDoForm.addEventListener('submit', submitToDo);
      const toDoList = document.getElementById('todo-list');
      toDoList.addEventListener('click', openModal);
      const logoutBtn = document.getElementById('logout-btn');
      logoutBtn.addEventListener('click', () => push('/login'));
    }
  });
  const config = { subtree: true, childList: true };
  observer.observe(document, config);
};

observeUrl();

// window.addEventListener('click', (e) => {
//   const rootDiv = document.getElementById('root');
//   const modal = document.getElementById('modal_container');
//   e.target === modal ? rootDiv.removeChild(modal) : false;
// });
// window.addEventListener('DOMContentLoaded', (e) => {
//   e.preventDefault();
//   const savedToDos = localStorage.getItem('TODOS');
//
//   if (savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);
//     parsedToDos.forEach(paintToDo);
//   }
// });
//
// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   saveToDo(newToDoObjArr);
// });
