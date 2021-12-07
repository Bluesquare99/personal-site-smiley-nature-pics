const pinkCrystal = document.querySelector(".source-crystal");

const facesDT = document.querySelector(".faces-dt");
const facesVH = document.querySelector(".faces-vh");

// Hide the downtrodden faces upon mouse hovering over pink crystal
pinkCrystal.addEventListener("mouseenter", function () {
  facesDT.style.display = "none";
  facesVH.style.display = "";
});

// Allow them to reappear when mouse leaves pink crystal
pinkCrystal.addEventListener("mouseleave", function () {
  facesDT.style.display = "";
  facesVH.style.display = "none";
});
