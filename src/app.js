document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Paket A", Image: "catering1.jpg", price: 99000 },
      { id: 2, name: "Paket B", Image: "catering2.jpg", price: 115000 },
      { id: 3, name: "Paket C", Image: "catering3.jpg", price: 130000 },
      { id: 3, name: "CiaTok 1", Image: "ciatok.jpg", price: 280000 },
      { id: 3, name: "CiaTok2", Image: "ciatok.jpg", price: 300000 },
      { id: 3, name: "Ciatok3", Image: "ciatok.jpg", price: 380000 },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // pengencekan apakah item sudah ada di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // jika ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika sudah ada di cart, cek apakah barang sama atau tidak dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== cartItem.id) {
            return item;
          } else {
            // jika barang sudah ada di cart, tambah quantity dan total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      console.log(this.total);
    },
    remove(id) {
      // ambil item yang akan dihapus berasarkan id
      const cartItem = this.items.find((item) => item.id === id);
      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri satu persatu item yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang yang buka di klik
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
      } else if (cartItem.quantity === 1) {
        // jika item barang tinggal 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// kirim data ketika tombol reservasi di klik
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objdata = Object.fromEntries(data);
  const message = formatMessage(objData);
  console.log(objData);
});

// kirim data ke server seperti wa atau email
const formatMessage = (obj) => {
  return `Data Customer
nama : ${obj.name}
room : ${obj.room}
tanggal : ${obj.date}
jam : ${obj.time}
event : ${obj.event}
phone : ${obj.phone}

Data Pesanan
${JSON.parse(obj.items).map(
  (item) => `${item.name} : (${item.quantity} x ${rupiah(item.total)}) \n`
)}
TOTAL: ${rupiah(obj.total)}
Terima Kasih.`;
};
// perpindahan mata uang
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
