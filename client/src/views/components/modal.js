import ModalStyle from 'styles/modal.module.css';
import closeButtonImg from '../../assets/delete.png';
import editButton from '../../assets/pencil.svg';
import deleteButton from '../../assets/trash.svg';

const editIcon = editButton;
const deleteIcon = deleteButton;

const Modal = `
  <div id='modal_container' class=${ModalStyle.container}>
      <div class=${ModalStyle.box}>
        <button id='close_button' class=${ModalStyle.closeButton}>
          <img src=${closeButtonImg} alt='close'
          class=${ModalStyle.closeButton_img} style='width: 12px'/>
        </button>
        <div class=${ModalStyle.button_container}>
          <button id='edit-button'>
            <img src=${editIcon} alt='edit'/>
            <p>수정</p>
          </button>
          <button id='delete-button'>
            <img src=${deleteIcon} alt='delete'/>
            <p>삭제</p>
          </button>
        </div>
      </div>
    </div>
`;

export default Modal;
