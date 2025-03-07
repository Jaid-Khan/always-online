// HAMBURGER MENU SHO AND HIDE FUNCTION 
document.getElementById("hamburger").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
  } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
  }
});