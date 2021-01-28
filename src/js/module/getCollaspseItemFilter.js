const getCollapseItemFilter = () => {
  const listBLockCollapsed = document.querySelectorAll('.block-with-collapsed');

  for (let block of listBLockCollapsed) {
    let button = block.querySelector('.block-with-collapsed__btn');
    let collapseBLock = block.querySelector('.block-with-collapsed__collapse')


    button.addEventListener('click', () => {
      collapseBLock.classList.toggle('block-with-collapsed__collapse--open')
    });
  }
};

export {getCollapseItemFilter}
