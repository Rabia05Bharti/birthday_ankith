const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let currentIndex = 0;
let startX = 0;

/* Open Lightbox */
function openLightbox(src) {
  currentIndex = images.indexOf(src);
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
  confetti();
}

/* Close Lightbox */
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* Swipe Detection */
const lightboxImg = document.getElementById("lightbox-img");

lightboxImg.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lightboxImg.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
 if (startX - endX > 50 && canSwipe()) nextImage();
if (endX - startX > 50 && canSwipe()) prevImage();

});

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

/* Confetti Effect */
function confetti() {
  const colors = [
    "#ff4d6d", // pink
    "#ffd166", // yellow
    "#06d6a0", // green
    "#118ab2", // blue
    "#9b5de5", // purple
    "#f15bb5"  // magenta
  ];

  for (let i = 0; i < 20; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";

    // random horizontal position
    conf.style.left = Math.random() * 100 + "vw";

    // random color from palette
    conf.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // random size
    const size = Math.random() * 6 + 6;
    conf.style.width = size + "px";
    conf.style.height = size + "px";

    // random speed
    conf.style.animationDuration =
      Math.random() * 2 + 1 + "s";

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

function surprise() {
  const text = 
`🎉 You are awesome! Stay happy, stay crazy & never change 😎💫

— From Rabia, the one and only chhota don ❤️

Happy Birthday! You are not old… you are vintage 😌✨

God be like: Chal isko thoda alag bana dete hain 💀😂`;

  const el = document.getElementById("surpriseText");
  el.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typing);
      el.innerHTML += `<span class="cursor">|</span>`;
    }
  }, 40);
}

  const music = document.getElementById("bgMusic");
  music.volume = 0.6; // soft volume
  music.play();

  // balloon burst
  for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 200);
  }


let lastSwipe = 0;

function canSwipe() {
  const now = Date.now();
  if (now - lastSwipe > 300) {
    lastSwipe = now;
    return true;
  }
  return false;
}
let confettiPlayed = false;

function openLightbox(src) {
  currentIndex = images.indexOf(src);
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;

  if (!confettiPlayed) {
    confetti();
    confettiPlayed = true;
  }
}
const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#9b5de5"];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  balloon.style.animationDuration =
    Math.random() * 4 + 6 + "s";

  document.querySelector(".balloons").appendChild(balloon);

  setTimeout(() => balloon.remove(), 10000);
}

// continuous balloons
setInterval(createBalloon, 800);



  // burst of balloons
  for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 200);
  }


function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

