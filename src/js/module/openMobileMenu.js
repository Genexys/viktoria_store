const openMobileMenu = () => {
  const btnMain = document.querySelector(`.header__mobile-button`);
  const menuHeader = document.querySelector(`.main-nav`);

  btnMain.addEventListener(`click`, function (e) {
    if (!menuHeader.classList.contains(`main-nav--open`)) {
      btnMain.classList.add(`header__mobile-button--active`);
      btnMain.setAttribute(`aria-expanded`, `true`);
      menuHeader.classList.add(`main-nav--open`);
    } else {

      btnMain.classList.remove(`header__mobile-button--active`);
      btnMain.setAttribute(`aria-expanded`, `false`);
      menuHeader.classList.remove(`main-nav--open`);
    }
  });

  menuHeader.addEventListener('click', function(e) {

    if (e.target === menuHeader && menuHeader.classList.contains(`main-nav--open`)) {
        btnMain.classList.remove(`header__mobile-button--active`);
        btnMain.setAttribute(`aria-expanded`, `false`);
        menuHeader.classList.remove(`main-nav--open`);
    }
  });

};

export {openMobileMenu};
