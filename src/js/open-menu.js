(() => {
  const refs = {
    openMobileBtn: document.querySelector('[open-mobile-menu]'),
    closeMobileBtn: document.querySelector('[close-mobile-menu]'),
    mmenu: document.querySelector('[mobile-menu-container]'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    refs.mmenu.classList.toggle('is-open');
  }
})();
