// Country dropdown toggle
const toggle = document.getElementById('selected-country');
const dropdown = document.getElementById('country-dropdown');

if (toggle && dropdown) {
    toggle.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });

    dropdown.querySelectorAll('div').forEach(item => {
      item.addEventListener('click', () => {
        const flag = item.getAttribute('data-flag');
        const name = item.getAttribute('data-name');
        toggle.innerHTML = `Ship to <img src="${flag}" alt="${name} Flag" /> <i class="fas fa-chevron-down"></i>`;
        dropdown.classList.remove('show');
      });
    });

    window.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
}


// Countdown timer for deals
function startCountdown() {
    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement) return;

    const timers = {
        days: countdownElement.querySelector('.timer:nth-child(1) span'),
        hours: countdownElement.querySelector('.timer:nth-child(2) span'),
        mins: countdownElement.querySelector('.timer:nth-child(3) span'),
        secs: countdownElement.querySelector('.timer:nth-child(4) span')
    };

    let totalSeconds = (4 * 24 * 60 * 60) + (13 * 60 * 60) + (34 * 60) + 56;

    const interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            return;
        }

        let days = Math.floor(totalSeconds / (24 * 60 * 60));
        let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        let mins = Math.floor((totalSeconds % (60 * 60)) / 60);
        let secs = totalSeconds % 60;

        timers.days.textContent = String(days).padStart(2, '0');
        timers.hours.textContent = String(hours).padStart(2, '0');
        timers.mins.textContent = String(mins).padStart(2, '0');
        timers.secs.textContent = String(secs).padStart(2, '0');

        totalSeconds--;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);