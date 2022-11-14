let end = new Date('12/1/2022');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
  let now = new Date();
  let distance = end - now;
  if (distance < 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = 'EXPIRED!';
      return;
  }
  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  let clock = days + "D:" + hours + "H:" + minutes + "M" 

  document.getElementById('timer').innerHTML = clock;
}

timer = setInterval(showRemaining, 1000);

// Create by Andquha 
