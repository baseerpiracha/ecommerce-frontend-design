// Country dropdown toggle
const toggle = document.getElementById('selected-country');
const dropdown = document.getElementById('country-dropdown');

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

// Generic dropdown toggler
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    const parent = this.closest('.dropdown');
    parent.classList.toggle('show');

    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== parent) d.classList.remove('show');
    });

    e.stopPropagation();
  });
});

window.addEventListener('click', function () {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
});

// Animation for banner image
const bannerImage = document.querySelector('.banner-image');
let opacity = 1;

function fadeBanner() {
  opacity = opacity === 1 ? 0.5 : 1;
  bannerImage.style.opacity = opacity;
}

setInterval(fadeBanner, 3000);

// Fade-in animation for sections
const sections = document.querySelectorAll('.categories, .recommended, .extra-services, .suppliers, .newsletter, .supplier-quote');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.5s ease';
  observer.observe(section);
});

// Hover effects for items
document.querySelectorAll('.category-item, .recommended-item, .service-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  });
});