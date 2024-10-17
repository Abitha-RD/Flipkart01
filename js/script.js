let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.style.display = i === index ? 'block' : 'none';
    });
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}

document.addEventListener('DOMContentLoaded', () => {
    showBanner(currentBanner);
    setInterval(nextBanner, 3000); // Change banner every 3 seconds
});
