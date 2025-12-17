// ================================================
// Script dynamique pour La Fabrique à Gourmandises
// ================================================

// Message d'accueil dans la console
console.log("Bienvenue dans La fabrique à gourmandises !");

// -----------------------
// Animation hover menu
// -----------------------
const links = document.querySelectorAll('header nav a');

links.forEach(link => {
    link.addEventListener('mouseover', () => link.style.transform = 'scale(1.1)');
    link.addEventListener('mouseout', () => link.style.transform = 'scale(1)');
});

// -----------------------
// Fade-in sections
// -----------------------
const sections = document.querySelectorAll('main .row');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(30px)';
    sec.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(sec);
});

// -----------------------
// Animation blocs gourmands
// -----------------------
const blocs = document.querySelectorAll('.bloc-gateau');

blocs.forEach(bloc => {
    bloc.style.opacity = 0;
    bloc.style.transform = 'translateY(20px)';
    bloc.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

const blocObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

blocs.forEach(bloc => blocObserver.observe(bloc));

// -----------------------
// Effet bonbons qui tombent
// -----------------------
function createBonbon() {
    const bonbon = document.createElement('div');
    bonbon.classList.add('bonbon');

    const bonbonsImages = [
        'Photos/19859.png',
        'Photos/192859.png',
        'Photos/198359.png',
        'Photos/219859.png',
        'Photos/1488.png',
        'Photos/1489.png',
        'Photos/1890.png',
        'Photos/1966.png',
        'Photos/1878.png'
    ];

    bonbon.style.backgroundImage = `url(${bonbonsImages[Math.floor(Math.random() * bonbonsImages.length)]})`;

    const size = 40 + Math.random() * 30; // 40 à 70px
    bonbon.style.width = `${size}px`;
    bonbon.style.height = `${size}px`;

    const pageWidth = document.documentElement.clientWidth;
    const sideMargin = pageWidth * 0.1;
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const offset = Math.random() * sideMargin;
    bonbon.style[side] = `${offset}px`;
    bonbon.style.top = '-80px';

    bonbon.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    const pageHeight = document.documentElement.scrollHeight - size; 
    bonbon.style.setProperty('--pageHeight', `${pageHeight}px`);

    const duration = 6 + Math.random() * 6; // 6-12s
    bonbon.style.animationDuration = `${duration}s`;

    document.body.appendChild(bonbon);

    setTimeout(() => {
        if (bonbon.parentNode) bonbon.remove();
    }, 8000);
}

setInterval(createBonbon, 600);

// -----------------------
// Modal images
// -----------------------
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = modal.querySelector(".close");

document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        caption.textContent = img.alt || img.title || '';
    });
});

closeBtn.addEventListener('click', () => modal.style.display = "none");

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// -----------------------
// Animation hover cards produits
// -----------------------
const cards = document.querySelectorAll('.col-md-4');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
});
