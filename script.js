const bDay = "11 Feb 2022";
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function tick() {
    const bDayDate = new Date(bDay);
    const currDate = new Date();
    const diff = bDayDate - currDate;

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);


    secondsElement.innerHTML = formatTime(seconds);
    minutesElement.innerHTML = formatTime(minutes);
    hoursElement.innerHTML = formatTime(hours);
    daysElement.innerHTML = days;

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

tick();
setInterval(tick, 1000)