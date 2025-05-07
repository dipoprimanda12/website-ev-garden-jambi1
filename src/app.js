document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      // bagian menu dan detail
      {
        id: 1,
        name: "Paket A /porsi",
        Image: "/img/catering/catering1.jpg",
        price: 99000,
        menu: [
          "Nasi Putih",
          "Ayam Goreng Kalasan",
          "Dendeng Batokok",
          "Sambel kentang telur Hati",
          "Sayur Capcay",
          "Buah Potong",
          "Kerupuk",
          "Air Mineral",
        ],
      },

      {
        id: 2,
        name: "Paket B /porsi",
        // contoh foto dari link
        Image:
          "https://th.bing.com/th/id/OIP.-bdffWpJrYLI2FyLysqkCQHaE0?rs=1&pid=ImgDetMain",
        price: 115000,
        menu: [
          "Nasi Putih",
          "Ayam Goreng Kalasan",
          "Gurami Asam Manis",
          "Dendeng Batokok",
          "Sambel kentang telur Hati",
          "Sayur Capcay",
          "Buah Potong",
          "Kerupuk",
          "Air Mineral",
        ],
      },

      {
        id: 3,
        name: "Paket C /porsi",
        Image: "/img/catering/catering3.jpg",
        price: 130000,
        menu: [
          "Nasi Putih",
          "Sup Asparagus",
          "Ayam Goreng Kalasan",
          "Gurami Asam Manis",
          "Dendeng Batokok",
          "Sambel kentang telur Hati",
          "Sayur Capcay",
          "Buah Potong",
          "Kerupuk",
          "Air Mineral",
        ],
      },

      {
        id: 4,
        name: "CiaTok 1 /porsi",
        Image:
          "https://iniborneo.com/wp-content/uploads/2023/01/IMG-20230119-WA0037.jpg",
        price: 280000,
      },

      {
        id: 5,
        name: "CiaTok 2 /porsi",
        Image: "/img/catering/ciatok.jpg",
        price: 300000,
      },

      {
        id: 6,
        name: "CiaTok 3 /porsi",
        Image: "/img/catering/ciatok.jpg",
        price: 380000,
      },

      {
        id: 7,
        name: "Saung Bakso Malang /porso",
        Image: "/img/catering/bakso.jpg",
        price: 10000,
      },

      {
        id: 8,
        name: "Saung Batagor /porsi",
        Image: "/img/catering/batagor.jpg",
        price: 10000,
      },

      {
        id: 9,
        name: "Saung Aneka Kue /pcs",
        Image: "/img/catering/kue.jpg",
        price: 3000,
      },

      {
        id: 10,
        name: "Saung Martabak /porsi",
        Image: "/img/catering/martabak1.jpg",
        price: 9000,
      },

      {
        id: 11,
        name: "Saung Pempek Tenggiri /pcs",
        Image: "/img/catering/pempek.jpg",
        price: 5000,
      },

      {
        id: 12,
        name: "Saung Roti Jala /porsi",
        Image: "/img/catering/Rotijala.jpg",
        price: 6000,
      },

      {
        id: 13,
        name: "Saung Siomay /porsi",
        Image: "/img/catering/siomay.jpg",
        price: 9000,
      },

      {
        id: 14,
        name: "Saung Sate Kacang /pcs",
        Image: "/img/catering/stkacang.jpg",
        price: 5000,
      },

      {
        id: 15,
        name: "Saung Sate Padang /pcs",
        Image: "/img/catering/stpadang.jpg",
        price: 5000,
      },

      {
        id: 16,
        name: "Saung Tekwan /porsi",
        Image: "/img/catering/tekwan.jpg",
        price: 9000,
      },

      {
        id: 17,
        name: "Saung Celimpungan /porsi",
        Image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1629551664/yzxieeziqmgtarcl94c7.jpg",
        price: 9000,
      },

      {
        id: 18,
        name: "Saung Mie Celor /porsi",
        Image:
          "https://img-global.cpcdn.com/recipes/4ca37f6e4e7a32b7/1360x964cq70/mie-celor-khas-palembang.jpg",
        price: 9000,
      },

      {
        id: 19,
        name: "Saung Soto lamongan /porsi",
        Image:
          "https://1.bp.blogspot.com/-XysUlNK5O1Y/YD5xcHzL6gI/AAAAAAAAANA/vbl5RdKqOeQwQ_gkZUQ2rEeIkUhGhKh9ACLcBGAsYHQ/w1200-h630-p-k-no-nu/resep-soto-lamongan-kuah-kuning.png",
        price: 9000,
      },

      {
        id: 20,
        name: "Saung Soto Bandung /porsi",
        Image:
          "https://asset.kompas.com/crops/ExTTXEyJV35Mdx3ERWfl4Y7c2gk=/0x0:1000x667/1200x800/data/photo/2023/11/20/655abbe1999a6.jpg",
        price: 9000,
      },

      {
        id: 21,
        name: "Saung Dimsum /pcs",
        Image:
          "https://healthynibblesandbits.com/wp-content/uploads/2019/05/Cantonese-Shumai-3.jpg",
        price: 6000,
      },

      {
        id: 22,
        name: "Saung Sapgeti Bolognese /porsi",
        Image:
          "https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/spaghetti-bolognese.jpg",
        price: 20000,
      },

      {
        id: 23,
        name: "Saung Zuppa Soup /porsi",
        Image:
          "https://www.rumahmesin.com/wp-content/uploads/2020/08/zuppa-soup.jpg",
        price: 22000,
      },

      {
        id: 24,
        name: "Saung Fettucine Calbonara /porsi",
        Image:
          "https://lakesidetable.com/wp-content/uploads/2018/04/Fettuccini-Carbonara-recipe-plated2.jpg",
        price: 20000,
      },

      {
        id: 25,
        name: "Saung Salmon Puff Wellington /porsi",
        Image:
          "https://littleferrarokitchen.com/wp-content/uploads/2021/10/Salmon-Wellington-6.jpg",
        price: 30000,
      },

      {
        id: 26,
        name: "Saung Barbeque /pcs",
        Image:
          "https://th.bing.com/th/id/R.4562795535d796242d13062a446c7b24?rik=0TS%2bnap2IXF7iQ&riu=http%3a%2f%2fcatering-gemak.nl%2fwp-content%2fuploads%2f2015%2f12%2fbbq-standaard-plus.jpg&ehk=hum72tjf2U7ypAIj7zMhSphyqpgapi8mX8YHZd8RWmk%3d&risl=&pid=ImgRaw&r=0",
        price: 6000,
      },

      {
        id: 27,
        name: "Saung Pai Buah /pcs",
        Image:
          "https://th.bing.com/th/id/OIP.Kc7u-ZCzwqZ9v2Hm-8x5jQHaEL?rs=1&pid=ImgDetMain",
        price: 5000,
      },

      {
        id: 28,
        name: "Saung Banana Roll /pcs",
        Image:
          "https://cdn-2.tstatic.net/aceh/foto/bank/images/Banana-Roll-Pisang-Gulung.jpg",
        price: 5000,
      },

      {
        id: 29,
        name: "Saung Risol Mayones /pcs",
        Image:
          "https://th.bing.com/th/id/OIP.DcddL6IYhLj1kQyOWXDWGAHaE8?rs=1&pid=ImgDetMain",
        price: 5000,
      },

      {
        id: 30,
        name: "Saung Brownise Coklat /pcs",
        Image:
          "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2020/02/HappyFresh_resep_brownies_kukus.jpg",
        price: 4000,
      },

      {
        id: 31,
        name: "Saung Brownise Keju /pcs",
        Image:
          "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/sasefoto/original/32266_brownies-kukus-keju.jpg",
        price: 4000,
      },

      {
        id: 32,
        name: "Saung Salad Bauh /porsi",
        Image:
          "https://th.bing.com/th/id/OIP.Z2kzN7TjN7jTx36Tk_EYPAHaE8?rs=1&pid=ImgDetMain",
        price: 15000,
      },
    ],
  }));
  // bagian menu dan detail selesai
  Alpine.store("modal", {
    preview(item) {
      const modal = document.getElementById("item-detail-modal");
      if (!modal) {
        console.error("Modal element not found");
        return;
      }
      modal.style.display = "block";

      const closeButton = modal.querySelector(".close-icon");
      if (closeButton) {
        closeButton.onclick = () => {
          modal.style.display = "none";
        };
      } else {
        console.error("Close button not found in modal");
      }

      const menuList = document.getElementById("list-menu");
      if (menuList && item.menu) {
        menuList.innerHTML = item.menu
          .map((menu) => `<li>${menu}</li>`)
          .join("");
      } else if (menuList) {
        menuList.innerHTML = "<li>Menu tidak tersedia</li>";
      }

      const itemName = document.getElementById("nama-menu");
      if (itemName) {
        itemName.textContent = item.name || "Nama menu tidak tersedia";
      } else {
        console.error("Item name element not found");
      }
    },
  });

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== cartItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// --- Form Validation ---
const checkoutButton = document.querySelector(".checkout-button");
const form = document.querySelector("#checkoutForm");
checkoutButton.disabled = true;

form.addEventListener("keyup", function () {
  let isValid = true;
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.trim() === "") {
      isValid = false;
      break;
    }
  }

  checkoutButton.disabled = !isValid;
  if (isValid) {
    checkoutButton.classList.remove("disabled");
  } else {
    checkoutButton.classList.add("disabled");
  }
});

// --- Handle Checkout Button ---
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();

  const objData = {
    name: form.elements["name"].value,
    room: form.elements["room"].value,
    date: form.elements["date"].value,
    time: form.elements["time"].value,
    event: form.elements["event"].value,
    phone: form.elements["phone"].value,
    items: JSON.stringify(Alpine.store("cart").items),
    total: Alpine.store("cart").total,
  };

  const message = formatMessage(objData);
  console.log(message);

  // Kirim ke WhatsApp (ganti nomor di bawah ini)
  window.open(
    `https://wa.me/6282278466698?text=${encodeURIComponent(message)}`
  );
});

// --- Format Pesan WhatsApp ---
const formatMessage = (obj) => {
  return `Data Customer
Nama    : ${obj.name}
Room    : ${obj.room}
Tanggal : ${obj.date}
Jam     : ${obj.time}
Event   : ${obj.event}
Phone   : ${obj.phone}

Data Pesanan:
${JSON.parse(obj.items)
  .map((item) => `${item.name} : (${item.quantity} x ${rupiah(item.total)})`)
  .join("\n")}

TOTAL: ${rupiah(obj.total)}
Terima Kasih.`;
};

// --- Format Rupiah ---
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
// format kirim pesan ke whatsapp
document.addEventListener("alpine:init", () => {
  Alpine.data("formHandler", () => ({
    name: "",
    perihal: "",
    phone: "",

    kirimPesan() {
      // Validasi input
      if (!this.name || !this.perihal || !this.phone) {
        alert("Semua field harus diisi.");
        return;
      }

      // Susun pesan untuk WhatsApp
      const message = `Nama: ${this.name}\nPerihal: ${this.perihal}\nNomor Telepon: ${this.phone}`;
      const whatsappLink = `https://wa.me/6282278466698?text=${encodeURIComponent(
        message
      )}`;

      // Buka WhatsApp dengan pesan
      window.open(whatsappLink, "_blank");
    },
  }));
});
