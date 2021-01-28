const getSearchFilter = () => {
  const blockParentList = document.querySelectorAll('.checkbox-wrapper--search');

  for (const parentEl of blockParentList) {
    const inputSearch = parentEl.querySelector('.checkbox-wrapper__input-search');
    const listItem = parentEl.querySelectorAll('.checkbox-label__text');

    inputSearch.addEventListener('input', () => {
      let searchValue = inputSearch.value.toLowerCase();

      for (let i = 0; i < listItem.length; i++) {

        if (listItem[i].textContent.toLowerCase().indexOf(searchValue) > -1) {

          listItem[i].parentElement.parentElement.style.display = ""
        } else {

          listItem[i].parentElement.parentElement.style.display = "none"
        }
      }
    })
  }
}

export {getSearchFilter}
