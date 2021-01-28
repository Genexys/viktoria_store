const closeSearchCategoryMini = () => {
    const searchBlock = document.querySelector('.search-block--mini');
    const btn = document.querySelector('.search-block__close');

    if (searchBlock) {
      btn.addEventListener('click', (e) => {
        console.log(e.target)
        console.log(this)
        searchBlock.classList.remove('search-block--mini--active')
      });
    }
};

export {closeSearchCategoryMini};
