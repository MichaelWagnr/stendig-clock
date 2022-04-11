const month = document.querySelector('.month');
const day = document.querySelector('.day');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const currentTime = new Date();

    const currentMonth = currentTime.getMonth();
    month.textContent = months[currentMonth];

    const currentDay = currentTime.getDate();
    day.textContent = currentDay;

    const currentHour = currentTime.getHours();
    hours.textContent = currentHour;

    const currentMinute = currentTime.getMinutes();
    minutes.textContent = currentMinute;

    const currentSecond = currentTime.getSeconds();
    seconds.textContent = currentSecond;
}

setInterval(updateTime, 1000);


