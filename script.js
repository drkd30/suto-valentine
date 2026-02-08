const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const invalid = document.getElementById("invalid");
const scene = document.getElementById("scene");
const message = document.getElementById("message");
const heart = document.getElementById("heartContainer");

// Ensure heart is hidden on load
heart.style.display = "none";

noBtn.addEventListener("click", () => {
    invalid.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    scene.classList.remove("hidden");

    startSequence();
});

function startSequence() {

    message.classList.remove("hidden");
    message.innerHTML = "I am so glad to have you as my Valentine";

    // After 5 seconds
    setTimeout(() => {
        message.innerHTML =
            "I am so sorry I haven't spent a single Valentine's day together but let this be the first virtual one for us";
    }, 5000);

    // After 10 seconds total
    setTimeout(() => {
        message.classList.add("hidden");
        heart.style.display = "flex";
    }, 10000);
}