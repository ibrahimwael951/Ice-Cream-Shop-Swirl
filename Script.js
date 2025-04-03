const playButton = document.getElementById("playButton");
const bgMusic = new Audio("./assets/background-music.mp3");
bgMusic.loop = true;
let isPlaying = false;

playButton.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
    isPlaying = !isPlaying;
});