import modal from '../../views/components/modal';
import closeModal from './closeModal';
import deleteToDo from './deleteToDo';
import startEditToDo from './startEditToDo';

const openModal = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const toDoId = target.closest('li').id;
  const rootDiv = document.getElementById('root');
  rootDiv.insertAdjacentHTML('beforeend', modal);
  const closeButton = document.getElementById('close_button');
  closeButton.addEventListener('click', closeModal);
  const deleteButton = document.getElementById('delete-button');
  deleteButton.addEventListener('click', (e) => deleteToDo(e, toDoId));
  const editButton = document.getElementById('edit-button');
  editButton.addEventListener('click', (e) => startEditToDo(e, toDoId));
};

export default openModal;
