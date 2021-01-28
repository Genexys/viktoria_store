const openSearchOnTop = () => {
  const filterTitle = document.querySelector('.title-product-filter__name');
  const btn = document.querySelector('.title-product-filter__change');
  const filter = document.querySelector('.search-block--mini');

  if (btn) {
    btn.addEventListener('click', function() {
      filter.classList.add('search-block--mini--active')
    });

    if (window.innerWidth <= 700) {
      filterTitle.addEventListener('click', (e) => {
        filter.classList.add('search-block--mini--active');
      });
    }
  }
};

export {openSearchOnTop}
