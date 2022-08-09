import paintToDo from './paintToDo';
import newToDoObjArr from '../utils/newToDoObjArr';
import { getUniqueId } from '../utils/uniqueId';

const submitToDo = (e) => {
  e.preventDefault();
  const toDoInput = document.querySelector('#todo-form input');
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const uniqueId = JSON.parse(localStorage.getItem('ID')) || { id: 0 };
  const newToDoObj = {
    text: newToDo,
    id: (uniqueId.id += 1),
  };
  localStorage.setItem('ID', JSON.stringify(uniqueId));
  newToDo && paintToDo(newToDoObj), newToDoObjArr.push(newToDoObj);
};

export default submitToDo;
