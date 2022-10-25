/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable func-names */

let form = document.querySelector('.feedback__form');
let formInputs = document.querySelectorAll('.feedback__form-input');
let inputPhone = document.querySelector('#phone');

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function (evt) {
  let phoneVal = inputPhone.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  evt.preventDefault();

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('feedback__error');
    } else {
      input.classList.remove('feedback__error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    inputPhone.classList.add('feedback__error');
    return false;
  } else {
    inputPhone.classList.remove('feedback__error');
  }

  console.log('Форма отправлена');
};
