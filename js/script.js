// =========================
// Ambil elemen-elemen yang dibutuhkan
// =========================

// Navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Search
const searchButton = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");

// Shopping Cart
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCard = document.querySelector(".shopping-card");

// Modal Box (Detail Produk)
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const closeModalIcon = document.querySelector(".close-icon");

// =========================
// Fungsi Toggle
// =========================

// Toggle navbar saat hamburger diklik
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarNav.classList.toggle("show");

  // Tutup elemen lain
  searchForm.classList.remove("show");
  shoppingCard.classList.remove("active");
  itemDetailModal.classList.remove("active");
});

// Toggle search form saat tombol search diklik
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  searchForm.classList.toggle("show");

  // Tutup elemen lain
  navbarNav.classList.remove("show");
  shoppingCard.classList.remove("active");
  itemDetailModal.classList.remove("active");
});

// Toggle shopping cart saat ikon cart diklik
shoppingCartButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  shoppingCard.classList.toggle("active");

  // Tutup elemen lain
  navbarNav.classList.remove("show");
  searchForm.classList.remove("show");
  itemDetailModal.classList.remove("active");
});

// Tampilkan modal detail produk saat tombol eye diklik
itemDetailButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    itemDetailModal.classList.add("active");

    // Tutup elemen lain
    navbarNav.classList.remove("show");
    searchForm.classList.remove("show");
    shoppingCard.classList.remove("active");
  });
});

// Tutup modal detail saat ikon close diklik
closeModalIcon.addEventListener("click", (e) => {
  e.preventDefault();
  itemDetailModal.classList.remove("active");
});

// =========================
// Tutup semua elemen jika klik di luar
// =========================

document.addEventListener("click", (e) => {
  // Navbar
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("show");
  }

  // Search form
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("show");
  }

  // Shopping cart
  if (
    !shoppingCard.contains(e.target) &&
    !shoppingCartButton.contains(e.target)
  ) {
    shoppingCard.classList.remove("active");
  }

  // Modal detail
  if (
    !itemDetailModal.contains(e.target) &&
    !e.target.classList.contains("item-detail-button")
  ) {
    itemDetailModal.classList.remove("active");
  }
});

// =========================
// JavaScript untuk modal
// =========================

document.addEventListener("DOMContentLoaded", function () {
  // Ambil tombol eye dan modal
  const detailButtons = document.querySelectorAll(".item-detail-button");
  const modal = document.getElementById("item-detail-modal");
  const closeModalButton = modal.querySelector(".close-icon");

  // Klik tombol eye untuk membuka modal
  detailButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block"; // Tampilkan modal
    });
  });

  // Klik tombol tutup untuk menutup modal
  closeModalButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none"; // Sembunyikan modal
  });

  // Klik di luar modal untuk menutup
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none"; // Sembunyikan modal
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Ambil tombol eye dan modal
  const detailButtons = document.querySelectorAll(".item-detail-button-2");
  const modal = document.getElementById("item-detail-modal-2");
  const closeModalButton = modal.querySelector(".close-icon");

  // Klik tombol eye untuk membuka modal
  detailButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block"; // Tampilkan modal
    });
  });

  // Klik tombol tutup untuk menutup modal
  closeModalButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none"; // Sembunyikan modal
  });

  // Klik di luar modal untuk menutup
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none"; // Sembunyikan modal
    }
  });
});
