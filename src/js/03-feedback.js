import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const keyLocalStorage = "feedback-form-state";

const inputValue = {
    email: "",
    message: "",
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onMessageInput, 500));

function onEmailInput(e) {
   inputValue.email = e.target.value;

    localStorage.setItem(keyLocalStorage, JSON.stringify(inputValue));
    
};

function onMessageInput(e) {
    inputValue.message = e.target.value;

    localStorage.setItem(keyLocalStorage, JSON.stringify(inputValue));
  
};

function textareaValue() {
  const savedMessage = JSON.parse(localStorage.getItem(keyLocalStorage));
    if (savedMessage) {
        refs.input.value = savedMessage.email;
        refs.textarea.value = savedMessage.message;
    }
}
textareaValue()
    
    
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
    
    if (localStorage.getItem(keyLocalStorage)) {
        console.log(localStorage.getItem(keyLocalStorage));
    }

  localStorage.removeItem(keyLocalStorage);
}