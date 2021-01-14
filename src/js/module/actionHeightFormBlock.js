const actionHeightFormBlock = () => {
  const formBlock = document.querySelector('.search-block');
  const topBlock = document.querySelector('.top-inform-block');
  formBlock.style.height = `${window.innerHeight - topBlock.clientHeight}px`

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 2) {
      formBlock.classList.add('search-block--collapse');
      formBlock.style.height = 0;
    }
  })
}

export {actionHeightFormBlock};