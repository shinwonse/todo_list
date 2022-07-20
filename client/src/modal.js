import 'styles/modal.css';
import closeButton from './assets/delete.png';
import editButton from './assets/pencil.svg';
import deleteButton from './assets/trash.svg';

export const modal = `
  <div class='modal-container'>
    <div id='modal-box'>
      <button class='close-button'>
        <img src=${closeButton} alt='close'/>
      </button>
      <div id='button-container'>
        <button id='edit-button'>
          <img src=${editButton} alt='edit' class='modal-button-img'/>
          <p>수정</p>
        </button>
        <button id='delete-button'>
          <img src=${deleteButton} alt='delete' class='modal-button-img'/>
          <p>삭제</p>
        </button>
      </div>
    </div>
  </div>
`

export const closeModal = ({ target }) => {
  const modal = document.querySelector('.show-modal');
  if (!target.closest('button')) {
    return;
  }
  modal.classList.remove('show-modal');
}
