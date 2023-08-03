(() => {
  const refs = {
    openModalBtn: document.querySelector('.button-primary'),
    closeModalBtn: document.querySelector('.container-svg'),
    modal: document.querySelector('.is-hidden'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();