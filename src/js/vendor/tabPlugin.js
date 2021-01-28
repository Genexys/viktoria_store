const tabsPlugin = function(option) {

  const parentEl = document.querySelector(option.parentElement);
  const tabNavigation = document.querySelectorAll(option.tab);
  const tabContent = document.querySelectorAll(option.tabContent);

  let activeIndex = 0;
  let initCalled = false;

  const init = function() {
    if (!initCalled) {
      initCalled = false;
      parentEl.classList.remove('no-js');

      for (let i = 0; i < tabNavigation.length; i++) {
        let btn = tabNavigation[i];
        handleClick(btn, i)
      }
    }
  }

  const handleClick = function(btn, index) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goToTab(index);
    });
  }

  const goToTab = function(index) {
    if (index !== activeIndex && index >= 0 && index <= tabNavigation.length) {
      tabNavigation[activeIndex].classList.remove('product-tab-description__tab-item--active');
      tabNavigation[activeIndex].setAttribute('tabindex', '-1');
      tabNavigation[activeIndex].setAttribute('aria-selected', 'false');

      tabNavigation[index].classList.add('product-tab-description__tab-item--active');
      tabNavigation[index].removeAttribute('tabindex');
      tabNavigation[index].setAttribute('aria-selected', 'true');

      tabContent[activeIndex].classList.remove('tab-content-item--active');
      tabContent[index].classList.add('tab-content-item--active');

      activeIndex = index;
    }
  }

  return {
    init: init,
    goToTab: goToTab
  };

}

export default tabsPlugin;
