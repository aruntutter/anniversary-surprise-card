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
  window.location.href = "https://github.com/aruntutter";
}
