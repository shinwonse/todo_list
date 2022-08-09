import Login from './views/pages/login';
import TodoList from './views/pages/todoList';

const routes = [
  {
    path: '/',
    component: TodoList,
  },
  {
    path: '/login',
    component: Login,
  },
];

const root = document.getElementById('root');

export const push = (path) => {
  history.pushState({}, '', path);

  const { component } = routes.find((route) => route.path === path);

  root.innerHTML = component;
};

window.addEventListener('popstate', () => {
  push(location.pathname);
});
