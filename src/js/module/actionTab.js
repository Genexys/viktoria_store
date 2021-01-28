import tabPlugin from '../vendor/tabPlugin';

const actionTab = () => {

  if (document.querySelector('.product-tab-description')) {
    const tab = tabPlugin({
      parentElement: '.product-tab-description',
      tab: '.product-tab-description__tab-item',
      tabContent: '.tab-content-item'
    });

    tab.init();
  }
}

export {actionTab};
