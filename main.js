document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video");
  console.log(video);

  const sceneAR = document.querySelector("#ar-session");
  const sceneEl = document.querySelector("a-scene");
  const arSystem = sceneEl.systems["mindar-image-system"];
  const firstTarget = document.querySelector("#first-target");
  const secondTarget = document.querySelector("#second-target");
  const sevenTarget = document.querySelector("#ten-target");

  const firstTargetText = document.querySelector("#first-target-text");

  video.classList.add("is_hidden");
  firstTargetText.style.display = "none";

  arSystem.start(); // start AR auto request to Camera

  //arSystem.stop(); // stop AR
  //arSystem.pause(); // pause AR, keep video feed
  //arSystem.pause(true); // pause AR and video
  //arSystem.unpause(); // unpause AR and video

  sceneEl.addEventListener("arReady", (event) => {
    // console.log("MindAR is ready")
  });
  // detect target found
  firstTarget.addEventListener("targetFound", (event) => {
    console.log("First target found");
    video.classList.remove("is_hidden");
    sceneAR.classList.add("is_hidden");
  });
  // detect target lost
  firstTarget.addEventListener("targetLost", (event) => {
    console.log("First target lost");
  });
  secondTarget.addEventListener("targetFound", (event) => {
    console.log("Second target found");
    firstTargetText.style.display = "block";
  });
  // detect target lost
  secondTarget.addEventListener("targetLost", (event) => {
    console.log("Second target lost");
    firstTargetText.style.display = "none";
  });
});
