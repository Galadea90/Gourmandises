// Script dynamique pour La fabrique à gourmandises


// Message d'accueil dans la console
console.log("Bienvenue dans La fabrique à gourmandises !");

// Effet smooth sur les liens du menu
const links = document.querySelectorAll('header nav a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Petit effet fade-in sur les sections du site
const elements = document.querySelectorAll('main .row');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});


// Animation d’apparition pour les blocs gourmands
const blocs = document.querySelectorAll('.bloc-gateau');

blocs.forEach(bloc => {
    bloc.style.opacity = 0;
    bloc.style.transform = 'translateY(20px)';
    bloc.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

const obsBlocs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

blocs.forEach(b => obsBlocs.observe(b));

const carouselItems = document.querySelectorAll('#carouselGourmandises .carousel-item');

carouselItems.forEach(item => {
    item.addEventListener('transitionstart', () => {
        const img = item.querySelector('img');
        if(img) img.style.transform = 'scale(1)';
    });
    item.addEventListener('transitionend', () => {
        const img = item.querySelector('img');
        if(img) img.style.transform = 'scale(1.05)';
    });
});



function createBonbon() {
    const bonbon = document.createElement('div');
    bonbon.classList.add('bonbon');

    // 7 bonbons différents
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

    // Taille aléatoire pour légèreté (40-70px)
    const size = 60 + Math.random() * 80;
    bonbon.style.width = `${size}px`;
    bonbon.style.height = `${size}px`;

    // Position horizontale aléatoire sur les marges gauche ou droite (10% de la largeur)
    const pageWidth = document.documentElement.clientWidth;
    const sideMargin = pageWidth * 0.1;
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const offset = Math.random() * sideMargin;
    bonbon.style[side] = `${offset}px`;
    bonbon.style.top = '-80px'; // commence légèrement au-dessus

    // Rotation aléatoire pour effet naturel
    bonbon.style.setProperty('--rotation', `${Math.random() * 360}deg`);

    // Hauteur totale de chute
    const pageHeight = document.documentElement.scrollHeight - size; 
    bonbon.style.setProperty('--pageHeight', `${pageHeight}px`);

    // Durée aléatoire pour un rendu léger (6-12s)
    const duration =  6 + Math.random() * 12;
    bonbon.style.animationDuration = `${duration}s`;

    document.body.appendChild(bonbon);

    // Ne pas supprimer le bonbon à la fin pour créer le tas
    // Optionnel : enlever après beaucoup de temps pour performance
    setTimeout(() => {
        if (bonbon.parentNode) bonbon.remove();
    }, 8000); // 1 minute
}

// Générer un nouveau bonbon toutes les 600ms
setInterval(createBonbon, 600);

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
