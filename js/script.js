document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Ambil elemen-elemen yang dibutuhkan
  // =========================
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  const searchButton = document.querySelector("#search");
  const searchForm = document.querySelector(".search-form");

  const shoppingCartButton = document.querySelector("#shopping-cart-button");
  const shoppingCard = document.querySelector(".shopping-card");

  // const modalsData = [
  //   { buttonClass: ".item-detail-button", modalId: "item-detail-modal" },
   
  // ];

  // // =========================
  // // Fungsi Modal
  // // =========================
  // function hideAllModals() {
  //   modalsData.forEach(({ modalId }) => {
  //     const modal = document.getElementById(modalId);
  //     if (modal) modal.style.display = "none";
  //   });
  // }

  // modalsData.forEach(({ buttonClass, modalId }) => {
  //   const buttons = document.querySelectorAll(buttonClass);
  //   const modal = document.getElementById(modalId);
  //   if (!modal) return;

  //   const closeButton = modal.querySelector(".close-icon");

  //   buttons.forEach((button) => {
  //     button.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       hideAllModals();
  //       navbarNav.classList.remove("show");
  //       searchForm.classList.remove("show");
  //       shoppingCard.classList.remove("active");
  //       modal.style.display = "flex";
  //     });
  //   });

  //   if (closeButton) {
  //     closeButton.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       modal.style.display = "none";
  //     });
  //   }

  //   window.addEventListener("click", (e) => {
  //     if (e.target === modal) {
  //       modal.style.display = "none";
  //     }
  //   });
  // });

  // =========================
  // Fungsi Toggle
  // =========================
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navbarNav.classList.toggle("show");
    searchForm.classList.remove("show");
    shoppingCard.classList.remove("active");
    hideAllModals();
  });

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchForm.classList.toggle("show");
    navbarNav.classList.remove("show");
    shoppingCard.classList.remove("active");
    hideAllModals();
  });

  shoppingCartButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    shoppingCard.classList.toggle("active");
    navbarNav.classList.remove("show");
    searchForm.classList.remove("show");
    hideAllModals();
  });

  // =========================
  // Tutup Semua Saat Klik di Luar
  // =========================
  document.addEventListener("click", (e) => {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove("show");
    }

    if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
      searchForm.classList.remove("show");
    }

    if (
      !shoppingCard.contains(e.target) &&
      !shoppingCartButton.contains(e.target)
    ) {
      shoppingCard.classList.remove("active");
    }
  });
});
