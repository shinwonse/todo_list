const updateToDo = (text, toDoId) => {
  const toDos = JSON.parse(localStorage.getItem('TODOS'));
  const replaceIndex = toDos.findIndex((toDo) => toDo.id === Number(toDoId));
  toDos[replaceIndex].text = text;
  localStorage.setItem('TODOS', JSON.stringify(toDos));
  const li = document.getElementById(toDoId);
  const input = li.querySelector('input');
  const span = li.querySelector('span');
  span.innerText = text;
  li.removeChild(input);
};

export default updateToDo;
