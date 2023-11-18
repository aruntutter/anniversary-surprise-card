const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const hiddenButton = document.querySelector(".hidden-button");

heart.addEventListener("click", toggleFlap);

hiddenButton.addEventListener("click", redirectToGitHub);

function toggleFlap(event) {
  if (event.target.closest(".heart")) {
    envelope.classList.toggle("flap");
    hiddenButton.classList.toggle("visible");
  }
}

function redirectToGitHub() {
  window.location.href = "https://ephemeral-flan-a16124.netlify.app/";
}

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.querySelector(".custom-audio audio");
  const playPauseBtn = document.querySelector(".play-pause-btn");
  const progressBar = document.querySelector(".progress-bar");
  const progressIndicator = document.querySelector(".progress-indicator");

  let isPlaying = false;

  playPauseBtn.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressIndicator.style.width = progress + "%";
  });

  progressBar.addEventListener("click", function (e) {
    const pos =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.clientWidth;
    audio.currentTime = pos * audio.duration;
  });
});
