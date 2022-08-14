import updateToDo from './updateToDo';

const startEditToDo = ({ target }, toDoId) => {
  if (!target.closest('button')) {
    return;
  }
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  const li = document.getElementById(toDoId);
  const input = document.createElement('input');
  input.id = toDoId;
  input.style.position = 'absolute';
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateToDo(e.target.value, li.id);
    }
  });
  li.appendChild(input);
  rootDiv.removeChild(modal);
};

export default startEditToDo;
