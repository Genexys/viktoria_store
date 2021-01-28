const countQuantityHandler = () => {
  function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "change"].forEach(function (event) {
      textbox.forEach(function (el) {
        el.addEventListener(event, function () {
          if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          }
        });
      })
    });
  }

  const calculator = function () {

    const field = document.querySelectorAll('.button-add__quantity');

    setInputFilter(document.querySelectorAll('input[type="text"]'), function (value) {
      return /^\d*$/.test(value);
    });

    field.forEach(function (el) {

      el.addEventListener('click', function (e) {
        const input = el.querySelector('input');

        if (e.target.matches('.quantity-inc')) {
          let incValue = ++input.value;
          input.setAttribute('value', incValue)

        } else if (e.target.matches('.quantity-dec')) {
          if (input.value > 1) {
            let decValue = --input.value;
            input.setAttribute('value', decValue)
          }
        }

      });
    });
  };

  calculator();
}

export {countQuantityHandler}
