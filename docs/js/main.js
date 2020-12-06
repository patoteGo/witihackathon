//menu movil
const mobilebutton = document.querySelectorAll("#menubutton");
const closebutton = document.querySelector("#closebutton");

const mobilemenu = document.querySelector("#mobilemenu");
const mobilemenuSlide = document.querySelector("#mobilemenu .menu-slide");

mobilebutton.forEach(btn => {
  btn.addEventListener("click", () => {
    mobilemenu.style.pointerEvents = "all";
    mobilemenuSlide.style.transform = "translateX(0px)";
  });
});



closebutton.addEventListener("click", () => {
  mobilemenu.style.pointerEvents = "none";
  mobilemenuSlide.style.transform = "translateX(100%)";
});

//slider para participar
const participateBtns = document.querySelectorAll(
  ".para-participar-section .option"
);
const slide = document.querySelector(
  ".para-participar-section .slides-wrapper"
);
const participateImgs = document.querySelectorAll(".imgsParticipar img");

participateBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    removeActive(participateBtns);
    removeActive(participateImgs);
    btn.classList.add("active");
    participateImgs[index].classList.add("active");
    index === 0 && (slide.style.transform = "translateX(0%)");
    index === 1 && (slide.style.transform = "translateX(-33%)");
    index === 2 && (slide.style.transform = "translateX(-66%)");
  });
});

const removeActive = (btns) => {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

//link menu
const menuBtns = document.querySelectorAll(".jump-menu");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(`#${btn.getAttribute("to")}`).scrollIntoView({
      behavior: "smooth",
    });
    mobilemenu.style.pointerEvents = "none";
    mobilemenuSlide.style.transform = "translateX(100%)";
  });
});

const menufix = document.querySelector(".fixedmenu");

window.addEventListener("scroll", function () {
  window.scrollY > 200
    ? menufix.classList.add("active")
    : menufix.classList.remove("active");
});
