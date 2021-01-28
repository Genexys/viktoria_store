import Inputmask from "inputmask";

const phoneMask = () => {

  Inputmask({
    mask: "+7(999)999-99-99",
    showMaskOnHover: false,
  }).mask(document.querySelectorAll(`input[type="tel"]`));

};

export {phoneMask};
