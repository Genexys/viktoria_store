const $ = require("jquery");
window.jQuery = $;

const actionHeightFormBlock = () => {
  const formBlock = document.querySelector('.search-block--main');

  if (formBlock && window.innerWidth > 700) {
    const topBlock = document.querySelector('.top-inform-block');
    const header = document.querySelector('.header');
    const btn = document.querySelector('.search-btn');

    formBlock.style.height = `${window.innerHeight - topBlock.clientHeight}px`

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 50) {
        formBlock.classList.add('search-block--collapse');
        header.style.paddingTop = `50px`;
        topBlock.style.opacity = 0;

      } else if (formBlock.classList.contains('search-block--collapse') && scrollTop < 20) {

        formBlock.classList.remove('search-block--collapse');
        topBlock.classList.remove('top-inform-block--hidden')
        header.style.paddingTop = `0px`;
        topBlock.style.opacity = 1;
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
};

export {actionHeightFormBlock};
