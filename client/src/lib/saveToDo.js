import newToDoObjArr from '../utils/newToDoObjArr';

const saveToDo = () => {
  const storedToDos = JSON.parse(localStorage.getItem('TODOS')) || [];
  newToDoObjArr.map((newToDoObj) => {
    storedToDos.push(newToDoObj);
  });
  localStorage.setItem('TODOS', JSON.stringify(storedToDos));
};

export default saveToDo;
