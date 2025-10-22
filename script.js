/**
 * ===================================
 * CORE UTILITIES
 * ===================================
 */

// FOOTER YEAR SCRIPT
// Sets the current year in the footer's copyright notice.
document.addEventListener('DOMContentLoaded', () => {
    const currentYearEl = document.getElementById("current-year");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});


/**
 * ===================================
 * INTERACTIVITY SCRIPTS
 * ===================================
 */

// CURSOR SPOTLIGHT SCRIPT
// Controls the position and size of the custom cursor spotlight.
const spotlight = document.querySelector('.cursor-spotlight');

if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .pricing-card, iframe, .testimonial-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => spotlight.classList.add('interactive'));
        el.addEventListener('mouseleave', () => spotlight.classList.remove('interactive'));
    });
}

// PRICING TOGGLE SCRIPT
// Handles the 50% discount toggle for pricing cards.
const priceToggle = document.getElementById('price-toggle');

if (priceToggle) {
    const priceStarterEl = document.getElementById('price-starter');
    const priceBusinessEl = document.getElementById('price-business');
    const priceEnterpriseEl = document.getElementById('price-enterprise');

    // NOTE: Original price for Enterprise was 1698 in HTML, but 1598 in JS.
    // Keeping the original JS logic here but using the HTML's 1698 for consistency if not toggled.
    const prices = {
        starter: { original: 599, discount: 299 },
        business: { original: 1198, discount: 599 },
        enterprise: { original: 1698, discount: 799 } // Corrected original to match HTML
    };

    priceToggle.addEventListener('change', function () {
        if (this.checked) {
            priceStarterEl.textContent = `$${prices.starter.discount}`;
            priceBusinessEl.textContent = `$${prices.business.discount}`;
            priceEnterpriseEl.textContent = `$${prices.enterprise.discount}`;
        } else {
            priceStarterEl.textContent = `$${prices.starter.original}`;
            priceBusinessEl.textContent = `$${prices.business.original}`;
            priceEnterpriseEl.textContent = `$${prices.enterprise.original}`;
        }
    });
}


/**
 * ===================================
 * VISUAL / ANIMATION SCRIPTS
 * ===================================
 */

// 7-SECOND TIMED VIDEO PLAYLIST SCRIPT
// Cycles through a playlist of videos for the hero background every 7 seconds.
const videoElement = document.getElementById('hero-background-video');

if (videoElement) {
    const videoPlaylist = [
        'https://videos.pexels.com/video-files/3192364/3192364-hd_1920_1080_25fps.mp4',
        'https://videos.pexels.com/video-files/7647253/7647253-hd_1920_1080_24fps.mp4',
        'https://videos.pexels.com/video-files/3198163/3198163-hd_1920_1080_25fps.mp4'
    ];
    let currentVideoIndex = 0;

    function playNextVideoSegment() {
        videoElement.src = videoPlaylist[currentVideoIndex];
        videoElement.load();
        videoElement.play().catch(error => console.log("Autoplay was prevented:", error));
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        setTimeout(playNextVideoSegment, 7000);
    }

    // Start the video cycling
    playNextVideoSegment();
}

// MARQUEE SCRIPT
// Duplicates testimonial cards to create an infinite horizontal scroll effect (marquee).
const marqueeTrack = document.querySelector('.testimonial-track');

if (marqueeTrack) {
    const items = Array.from(marqueeTrack.children);
    // Duplicate items for the continuous marquee effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
}