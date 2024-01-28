import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');
let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    chooseDate();
  },
};

flatpickr(dateTimePicker, options);

function chooseDate() {
  if (userSelectedDate < Date.now()) {
    buttonStart.disabled = true;
    iziToast.show({
      message: 'Please choose a date in the future',
      position: 'topCenter',
    });
    return;
  } else {
    buttonStart.disabled = false;
    intervalId = setInterval(startTimer, 1000);
  }
}

buttonStart.addEventListener('click', () => {
  if (userSelectedDate && !intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    buttonStart.disabled = true;
  }
});

function startTimer() {
  const diff = userSelectedDate - Date.now();
  if (diff <= 0) {
    clearInterval(intervalId);
    outputDays.textContent = '00';
    outputHours.textContent = '00';
    outputMinutes.textContent = '00';
    outputSeconds.textContent = '00';
  } else {
    const { days, hours, minutes, seconds } = convertMs(diff);
    outputDays.textContent = addLeadingZero(days);
    outputHours.textContent = addLeadingZero(hours);
    outputMinutes.textContent = addLeadingZero(minutes);
    outputSeconds.textContent = addLeadingZero(seconds);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}
