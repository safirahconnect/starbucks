window.onload = function () {
  const mobileIcon = document.querySelector(".header-mobile-icon");
  mobileIcon.addEventListener("click", function () {
    document.querySelector(".header-mobile-menu").classList.toggle("active");
  });

  const mobileCloseIcon = document.querySelector(".header-mobile-menu img");
  mobileCloseIcon.addEventListener("click", function () {
    document.querySelector(".header-mobile-menu").classList.remove("active");
  });
};
