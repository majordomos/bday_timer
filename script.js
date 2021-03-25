const bDay = "11 Feb 2022";

function tick() {
    const bDayDate = new Date(bDay);
    const currDate = new Date();
    const diff = bDayDate - currDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);



    console.log(
        `days - ${days}, 
        hours - ${hours}, 
        minutes - ${minutes},
        seconds - ${seconds}`);
}

tick();
setInterval(tick, 1000)