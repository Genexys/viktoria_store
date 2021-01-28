import {validateForm} from './getValidateForm';
import {inputValue} from './inputValue';

const validateReviewForm = () => {
  const formList = document.querySelectorAll(`.form-review`);

  for (const form of formList) {

    inputValue(form);

    if (form) {
      const constraints = {
        name: {
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

export {validateReviewForm}
