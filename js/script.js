// Ambil elemen navbar-nav dan tombol hamburger
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle class 'show' saat hamburger diklik
hamburger.onclick = (e) => {
  e.stopPropagation(); // cegah event bubbling
  navbarNav.classList.toggle("show");
};

// Tutup navbar jika user klik di luar menu
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("show");
  }
});
