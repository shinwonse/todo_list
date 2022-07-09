import deleteIcon from './assets/delete.png';

export const TODOS_KEY = 'TODOS';
export const toDos = [];

export const handleToDoSubmit = (e) => {
  e.preventDefault();
  const toDoInput = document.getElementById("todo-input");
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now() + Math.random(),
  };
  // newToDo === '' ? null : (toDos.push(newToDoObj), paintToDo(newToDoObj), saveToDo());
  newToDo && (toDos.push(newToDoObj), paintToDo(newToDoObj), saveToDo());
};

// export const paintToDo = (newToDoObj) => {
//   const toDoList = document.getElementById("todo-list");
//   const li = getCreateElement("li");
//   li.id = newToDoObj.id;
//   const span = getCreateElement("span", newToDoObj.text);
//   const deleteButton = getCreateDeleteButton(deleteIcon);
//
//   // deleteButton.addEventListener('click', deleteToDo);
//
//   li.appendChild(span);
//   li.appendChild(deleteButton);
//   toDoList.appendChild(li);
// };

export const paintToDo = (newToDoObj) => {
  const toDoList = document.getElementById('todo-list');
  const deleteImg = deleteIcon;
  const toDo = `
    <li id=${newToDoObj.id}>
      <span>${newToDoObj.text}</span>
      <button>
        <img src=${deleteImg} alt='delete' />
      </button>
    </li>
  `
  toDoList.insertAdjacentHTML('beforeend',toDo);
}

export const saveToDo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

export const deleteToDo = ({ target }) => {
  // Object.prototype.toString.call(type)
  if (!target.closest('button')) {
    return;
  }

  const li = target.parentElement.parentElement;
  const deleteIndex = toDos.findIndex(toDo => toDo.id === JSON.parse(li.id));
  toDos.splice(deleteIndex, 1);
  li.remove();
  saveToDo();
};

export const addManyItems = (e) => {
  e.preventDefault();
  const toDoInput = document.getElementById("todo-input");
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now() + Math.random(),
  };
  // newToDo === '' ? null : (toDos.push(newToDoObj), paintToDo(newToDoObj), saveToDo());
  for (let i = 0; i < 10000; i++) {
    newToDo && (toDos.push(newToDoObj), paintToDo(newToDoObj), saveToDo());
  }
}

export const deleteAllItems = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const ul = document.getElementById('todo-list');
  ul.innerHTML = '';
  localStorage.clear();
}

