const songs = ["music1.mp3", "music2.mp3"];
let currentSong = 0;

const audio = new Audio(songs[currentSong]);
audio.volume = 0.5;
audio.play();

audio.addEventListener("ended", () => {
  currentSong++;
  if (currentSong < songs.length) {
    audio.src = songs[currentSong];
    audio.play();
  }
});
