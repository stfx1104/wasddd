var music = document.getElementById("bg-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

let currentIndex = 0;

function moveCarousel() {
    const track = document.getElementById("carousel-track");
    currentIndex = (currentIndex + 1) % 10;
    track.style.transform = `translateX(-${currentIndex * 300}px)`;
}

setInterval(moveCarousel, 3000);
