import modalStyle from 'styles/modal.module.css';
import closeButtonImg from './assets/delete.png';
import editButton from './assets/pencil.svg';
import deleteButton from './assets/trash.svg';
import modal from './views/components/modal';

const editIcon = editButton;
const deleteIcon = deleteButton;

export const openModal = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const toDoId = target.closest('li').id;
  const rootDiv = document.getElementById('root');
  rootDiv.insertAdjacentHTML('beforeend', modal);
  const closeButton = document.getElementById('close_button');
  const deleteButton = document.getElementById('delete-button');
  // const editButton = document.getElementById('edit-button');
  closeButton.addEventListener('click', closeModal);
  deleteButton.addEventListener('click', (e) => deleteToDo(e, toDoId));
  // editButton.addEventListener('click', (e) => startEditToDo(e, toDoId));
};

export const closeModal = ({ target }) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  if (!target.closest('button')) {
    return;
  }
  rootDiv.removeChild(modal);
};
