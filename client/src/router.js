import TodoList from './views/pages/todoList';
import Login from './views/pages/login';

const routes = {
  '/': { title: 'Home', render: TodoList },
  '/login': { title: 'Login', render: Login },
};

const root = document.getElementById('root');

export const router = () => {
  const view = routes[location.pathname];

  if (view) {
    document.title = view.title;
    root.innerHTML = view.render;
  } else {
    history.replaceState(null, null, '/');
    router();
  }
};

window.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
