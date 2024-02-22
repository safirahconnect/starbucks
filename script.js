window.onload = function () {
  const mobileIcon = document.querySelector(".header-mobile-icon");
  mobileIcon.addEventListener("click", function () {
    document.querySelector(".header-mobile-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("bg-effect");
  });

  const mobileCloseIcon = document.querySelector(".header-mobile-menu img");
  mobileCloseIcon.addEventListener("click", function () {
    document.querySelector(".header-mobile-menu").classList.remove("active");
    document.querySelector("body").classList.remove("bg-effect");
  });
};
