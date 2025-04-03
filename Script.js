const playButton = document.getElementById("playButton");
const bgMusic = new Audio("./assets/background-music.mp3");
bgMusic.loop = true;
let isPlaying = true;
bgMusic.play()

playButton.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
    isPlaying = !isPlaying;
});