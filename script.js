// tife's script //

// const  days = document.getElementById('days');
const hours = document.getElementById('hours');
const  mins = document.getElementById('mins');
const  secs = document.getElementById('secs');

// const startTime = new Date().getTime();

const endTime = new Date('January 07, 2024 00:00:00').getTime();

//countdown
function updateCountdown(){
    const currentTime = new Date();
    const diff = endTime - currentTime;

    // const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // days.innerHTML = d; 
    hours.innerHTML = h < 10 ? '0' + h : h;
    mins.innerHTML = m < 10 ? '0' + m : m;
    secs.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
