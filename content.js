let videos = [];

document.addEventListener("visibilitychange", () => {
  videos = Array.from(document.querySelectorAll("video"));

  if (document.hidden) {
    videos.forEach((video) => {
      if (!video.paused) {
        video.pause();
        video.dataset.autoPaused = "true";
      }
    });
  } else {
    videos.forEach((video) => {
      if (video.dataset.autoPaused === "true") {
        video.play();
        video.dataset.autoPaused = "false";
      }
    });
  }
});
