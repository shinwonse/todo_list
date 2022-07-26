import modalStyle from 'styles/modal.module.css';
import closeButtonImg from './assets/delete.png';
import editButton from './assets/pencil.svg';
import deleteButton from './assets/trash.svg';
import { deleteToDo, startEditToDo } from './features';

export const openModal = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const toDoId = target.closest('li').id;
  const rootDiv = document.getElementById('root');
  const modal = `
    <div id='modal_container' class=${modalStyle.container}>
      <div class=${modalStyle.box}>
        <button id='close_button' class=${modalStyle.closeButton}>
          <img src=${closeButtonImg} alt='close'
          class=${modalStyle.closeButton_img} style='width: 12px'/>
        </button>
        <div class=${modalStyle.button_container}>
          <button id='edit-button'>
            <img src=${editButton} alt='edit'/>
            <p>수정</p>
          </button>
          <button id='delete-button'>
            <img src=${deleteButton} alt='delete'/>
            <p>삭제</p>
          </button>
        </div>
      </div>
    </div>
  `;
  rootDiv.insertAdjacentHTML('beforeend', modal);
  const closeButton = document.getElementById('close_button')
  const deleteButton = document.getElementById('delete-button');
  const editButton = document.getElementById('edit-button');
  closeButton.addEventListener('click', closeModal);
  deleteButton.addEventListener('click', (e) => deleteToDo(e, toDoId));
  editButton.addEventListener('click', (e) => startEditToDo(e, toDoId));
}

export const closeModal = ({ target }) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  if (!target.closest('button')) {
    return;
  }
  rootDiv.removeChild(modal);
}
