const openFilterMobile = () => {
  const btn = document.querySelector('.filter-block__open');
  const filterBlock = document.querySelector('.filter-block');

  if (btn) {
    btn.addEventListener('click', () => {
      filterBlock.classList.toggle('filter-block--open');
    });
  }
}

export {openFilterMobile}
