import form from 'styles/form.module.css';
import addIcon from '../../../assets/images/add.svg';

const ToDoForm = `
  <form id='todo-form'>
    <div class='${form.form}'>
      <h1 class='${form.title}'>TODO LIST</h1>
      <div id='input-wrapper' class='${form.input__wrapper}'>
        <input class='${form.input}' id='todo-input' data-cy='input'>
          <button class='${form.button}' data-cy='input-button'>
            <img class='${form.button__img}' src='${addIcon}' alt='add'/>
          </button>
        </input>
      </div>
    </div>
  </form>
`;

export default ToDoForm;
