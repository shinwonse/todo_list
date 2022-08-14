const deleteToDo = ({ target }, toDoId) => {
  if (!target.closest('button')) {
    return;
  }
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  const li = document.getElementById(toDoId);
  const toDos = JSON.parse(localStorage.getItem('TODOS'));
  const deleteIndex = toDos.findIndex((toDo) => toDo.id === Number(toDoId));
  toDos.splice(deleteIndex, 1);
  localStorage.setItem('TODOS', JSON.stringify(toDos));
  li.remove();
  rootDiv.removeChild(modal);
};

export default deleteToDo;
