(() => {
  const refs = {
    openModalBtn: document.querySelector('.button-primary'),
    closeModalBtn: document.querySelector('.container-svg'),
    modal: document.querySelector('.modal-backdrop'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("modal-backdrop");
  }
})();