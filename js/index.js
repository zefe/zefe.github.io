var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

window.sr = ScrollReveal();

    sr.reveal('.scroll-title', {
        duration: 2000, //2s
        origin: 'right',
        distance: '-100px',
    });

    sr.reveal('.scroll-btn', {
        duration: 3000, //3s
        origin: 'right',
        distance: '-100px',
    });

    sr.reveal('.row', {
        duration: 3000, //3s
        origin: 'right',
        distance: '-100px',
    });

    sr.reveal('.animation-up', {
        duration: 2000, //2s
        origin: 'bottom',
        distance: '-100px',
    });

    sr.reveal('.project-img', {
        duration: 3000, //3s
        origin: 'top',
        distance: '-100px',
    });



