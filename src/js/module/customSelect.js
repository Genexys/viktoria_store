import SlimSelect from 'slim-select'

const customSelect = () => {
  const selectList = document.querySelectorAll('select');
  let customSelectType;

  for (const select of selectList) {

    if (select.getAttribute('name') === 'type') {
      customSelectType = new SlimSelect({
        select: select,
        showSearch: false,
        placeholder: ' ',
      })
    } else {
      new SlimSelect({
        select: select,
        showSearch: false,
        placeholder: ' ',
      })
    }
  }

  const buttonType = document.querySelectorAll('.select-type button');

  for (const button of buttonType) {
    button.addEventListener('click', () => {
      customSelectType.set(button.dataset.typeSelect)
    });
  }
}

export {customSelect}