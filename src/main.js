document.addEventListener("DOMContentLoaded", function () {


    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-image-system"];
    const firstTarget = document.querySelector('#first-target');
    const secondTarget = document.querySelector('#second-target');

    const firtTargetText = document.querySelector("#first-target-text");
    
    firtTargetText.style.display = "none";

    arSystem.start(); // start AR auto request to Camera

    //arSystem.stop(); // stop AR 
    //arSystem.pause(); // pause AR, keep video feed
    //arSystem.pause(true); // pause AR and video
    //arSystem.unpause(); // unpause AR and video

    sceneEl.addEventListener("arReady", (event) => {
        // console.log("MindAR is ready")
    });
    // detect target found
    firstTarget.addEventListener("targetFound", event => {
        console.log("First target found");
    });
    // detect target lost
    firstTarget.addEventListener("targetLost", event => {
        console.log("First target lost");
    });
    secondTarget.addEventListener("targetFound", event => {
        console.log("Second target found");
        firtTargetText.style.display = "block";
    });
    // detect target lost
    secondTarget.addEventListener("targetLost", event => {
        console.log("Second target lost");
        firtTargetText.style.display = "none";
    });
});