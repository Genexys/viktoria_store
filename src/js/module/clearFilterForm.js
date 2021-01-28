const clearFIlterForm = () => {
  const form = document.querySelector('.filter-form');

  if (form) {
    const checkboxList = form.querySelectorAll('input[type="checkbox"]')
    const btnClear = form.querySelector('.filter-form__clear')
    const $inputFrom = $(".js-input-from");
    const $inputTo = $(".js-input-to");

    btnClear.addEventListener('click', () => {
      form.reset();

      const $slider = $(".filter-form").find(".js-range-slider");
      const slider_instance = $slider.data("ionRangeSlider")
      slider_instance.reset();

      $inputFrom.prop("value", slider_instance.options.min);
      $inputTo.prop("value", slider_instance.options.max);

      for (const checkbox of checkboxList) {
        checkbox.checked = false;
      }
    });
  }
}

export {clearFIlterForm}
