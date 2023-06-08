function christmas() {
  const dataChristmas = new Date("december, 31, 2023, 00:00");
  const now = new Date();
  const diff = dataChristmas - now;
  const sec = 1000;
  const minute = 60 * 1000;
  const hours = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const allDay = Math.floor(diff / day);
  document.querySelector(".days").textContent = allDay;
  const allHours = Math.floor((diff % day) / hours);
  document.querySelector(".hours").textContent = allHours;
  const allMinute = Math.floor((diff % hours) / minute);
  document.querySelector(".minutes").textContent = allMinute;
  const allSeconds = Math.floor((diff % minute) / sec);
  document.querySelector(".seconds").textContent = allSeconds;

  if (diff <=0) {
    document.querySelector(".days").textContent =0;
    document.querySelector(".hours").textContent =0;
    document.querySelector(".minutes").textContent =0;
    document.querySelector(".seconds").textContent =0;
    
    clearInterval(timer);
    christmasDay();
   
  }

  
}

let timer=setInterval(christmas,1000);

function christmasDay(){
  const head=document.querySelector('h1');
  head.textContent='MERRY CHRISTMAS!!! HO-HO-HO!';
  head.classList.add('santa');
}

const button=document.querySelector('.btn');
button.addEventListener('click', function(){
document.querySelector('#song').play();
})


