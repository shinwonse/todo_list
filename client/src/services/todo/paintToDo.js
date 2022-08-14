import ToDo from '../../views/components/toDo';

const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  toDoList.insertAdjacentHTML('beforeend', ToDo);
  const newToDo = toDoList.querySelector('li:last-child');
  newToDo.id = newToDoObj.id;
  newToDo.querySelector('span').innerText = newToDoObj.text;
};

export default paintToDo;
