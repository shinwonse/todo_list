import 'styles/reset.css';
import 'styles/index.css';
import {deleteToDo, handleToDoSubmit, paintToDo, addManyItems, deleteAllItems} from './toDoFunction';



// 투두리스트에 필요한 element들을 생성
const init = () => {
  const rootDiv = document.getElementById('root');
  const toDoForm = document.getElementById('todo-form');

  const toDoFormContents = `
    <div id='content-wrapper'>
      <h1>TODO LIST</h1>
      <input id='todo-input'>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" height="13" width="13">
            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
          </svg>
        </button>
      </input>
      <ul id='todo-list'>
    </div>
  `

  toDoForm.insertAdjacentHTML('beforeend',toDoFormContents);
  rootDiv.appendChild(toDoForm);

  const toDoList = document.getElementById('todo-list');

  // toDoForm.addEventListener('submit', handleToDoSubmit);
  toDoForm.addEventListener('submit', addManyItems);
  // toDoList.addEventListener('click', deleteToDo);
  toDoList.addEventListener('click', deleteAllItems);
  // const a = {
  //   b() {
  //     return 'wonse';
  //   }
  // };
  // console.log(a.b?.());
  //
  // const arr = ['hello', 'world', 'hi'];
  // arr.map(v => console.log(v));
  // const hello = () => {
  //   console.log('hello');
  // }
  // hello();
  // [1, 2, 3].map(n => n ** n);
}

init();

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(parsedToDo => toDos.push(parsedToDo));
  parsedToDos.forEach(paintToDo);
}

