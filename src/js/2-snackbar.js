import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
const buttonRef = document.querySelector('.form button[type="submit"]');

buttonRef.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();
  formRef = e.target;
  let delay = formRef.elements.delay.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
  });
  promise.then(value => console.log(value)).catch(error => console.log(error));
  form.reset();
}
