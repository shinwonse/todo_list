const closeModal = ({ target }) => {
  const rootDiv = document.getElementById('root');
  const modal = document.getElementById('modal_container');
  if (!target.closest('button')) {
    return;
  }
  rootDiv.removeChild(modal);
};

export default closeModal;
