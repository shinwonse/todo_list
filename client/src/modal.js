import modalStyle from 'styles/modal.module.css';
import closeButtonImg from './assets/delete.png';
import editButton from './assets/pencil.svg';
import deleteButton from './assets/trash.svg';

export const openModal = ({ target }) => {
  if (!target.closest('button')) {
    return;
  }
  const rootDiv = document.getElementById('root');
  const modal = `
    <div id='modal_container' class=${modalStyle.container}>
      <div class=${modalStyle.box}>
        <button id='close_button' class=${modalStyle.close_button}>
          <img src=${closeButtonImg} alt='close'/>
        </button>
        <div class=${modalStyle.button_container}>
          <button id='edit-button'>
            <img src=${editButton} alt='edit' class=${modalStyle.button_img}/>
            <p>수정</p>
          </button>
          <button id='delete-button'>
            <img src=${deleteButton} alt='delete' class='modal-button-img'/>
            <p>삭제</p>
          </button>
        </div>
      </div>
    </div>
  `;
  rootDiv.insertAdjacentHTML('beforeend', modal);
  const closeButton = document.getElementById('close_button')
  closeButton.addEventListener('click', closeModal);
}

export const closeModal = ({ target }) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  if (!target.closest('button')) {
    return;
  }
  rootDiv.removeChild(modal);
}
