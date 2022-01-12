function countdown(){

const targetDate = new Date('01 JUN 2022 12:00:00').getTime();


const d = new Date().getTime();


const diff = targetDate - d;
const days = diff/(1000 * 60 * 60 * 24);
const actualDays = Math.floor(days);


document.querySelector('#days').textContent = actualDays;

const hours = (days - actualDays)*24;
const actualHours = Math.floor(hours); 


document.querySelector('#hours').textContent = actualHours;


const minutes = (hours - actualHours) * 60;
const actualMinutes = Math.floor(minutes);


document.querySelector('#minutes').textContent = actualMinutes;

const seconds = (minutes - actualMinutes) * 60;
const actualSeconds = Math.floor(seconds);


document.querySelector('#seconds').textContent = actualSeconds;

if(actualDays == 0 && actualHours == 0 && actualMinutes == 0 && actualSeconds == 0){
    const showEmoji = document.querySelector('#content');
    showEmoji.classList.remove('emoji1');
    showEmoji.classList.add('emoji2');
   
    clearInterval(interval);
}

}

const interval = setInterval(countdown,1000);