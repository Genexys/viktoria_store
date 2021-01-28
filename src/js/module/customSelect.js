import SlimSelect from 'slim-select'

const customSelect = () => {
  const selectList = document.querySelectorAll('select');
  let customSelectType;

  // for (const select of selectList) {
  //
  //   if (select.getAttribute('name') === 'type') {
  //     customSelectType = new SlimSelect({
  //       select: select,
  //       showSearch: false,
  //       placeholder: ' ',
  //     })
  //   } else {
  //     new SlimSelect({
  //       select: select,
  //       showSearch: false,
  //       placeholder: ' ',
  //     })
  //   }
  // }
  //
  // const buttonType = document.querySelectorAll('.select-type button');
  //
  // for (const button of buttonType) {
  //   button.addEventListener('click', () => {
  //     customSelectType.set(button.dataset.typeSelect)
  //   });
  // }

  if (selectList[0]) {
    Selectize.define('hidden_textfield', function(options) {
      const self = this;
      this.showInput = function() {
        this.$control.css({cursor: 'pointer'});
        this.$control_input.css({opacity: 0, position: 'relative', left: self.rtl ? 10000 : -10000 });
        this.isInputHidden = false;
      };

      this.setup_original = this.setup;

      this.setup = function() {
        self.setup_original();
        this.$control_input.prop("disabled","disabled");
      }
    });

    const customSelect = $('.custom-select').selectize({
      plugins: ['hidden_textfield']
    })

    const select = $('.custom-select-search').selectize({
      placeholder: $(this).attr('data-placeholder')
    });

    const selectType = select[0].selectize;

    const buttonType = document.querySelectorAll('.select-type button');

    for (const button of buttonType) {
      button.addEventListener('click', () => {
        selectType.setValue(button.dataset.typeSelect, false);
      });
    }
  }

}

export {customSelect}
