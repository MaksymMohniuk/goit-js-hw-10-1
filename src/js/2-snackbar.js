import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
const buttonRef = document.querySelector('.form button[type="submit"]');

buttonRef.addEventListener('click', createPromise);

function createPromise(e) {
  e.preventDefault();
  let delay = Number(formRef.elements.delay.value);
  const state = formRef.elements.state.value;
  let promise;

  if (state === 'fulfilled') {
    promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${delay}ms`), delay);
    });
  } else {
    promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`${delay}ms`)), delay);
    });
  }
  promise
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in: ${message}`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in: ${error.message}`,
        position: 'topRight',
      });
    });
  formRef.reset();
}
