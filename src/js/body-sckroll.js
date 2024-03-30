const bodySkrollLock = () => {
  var scrollPosition = window.scrollY;
  const openBtnModal = document.querySelector('.js-open-menu');
  const closeBtnModal = document.querySelector('.js-close-menu');

  openBtnModal.addEventListener('click', lockScroll);
  closeBtnModal.addEventListener('click', unlockScroll);

  function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = -scrollPosition + 'px';
  }

  function unlockScroll() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.body.style.top = 'auto';
    window.scrollTo(0, scrollPosition);
  }
};
