document.addEventListener("DOMContentLoaded", () => {
  const backgroundVideo = document.querySelector(".bg-stack__video");
  if (!backgroundVideo) return;

  const playPromise = backgroundVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
});
