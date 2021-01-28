import {validateForm} from './getValidateForm';
import {inputValue} from './inputValue';

const validateFeedbackForm = () => {
  const formList = document.querySelectorAll(`.form-feedback`);

  for (const form of formList) {
    inputValue(form);

    if (form) {
      const constraints = {
        name: {
          presence: true,
        },
        email: {
          presence: true,
        },
        phone: {
          presence: true,
        },
        text: {
          presence: true,
        },
      };

      validateForm(form, constraints);
    }
  }
}

export {validateFeedbackForm}
