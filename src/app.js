document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Paket A", Image: "catering1.jpg", price: 99000 },
      { id: 2, name: "Paket B", Image: "catering2.jpg", price: 115000 },
      { id: 3, name: "Paket C", Image: "catering3.jpg", price: 130000 },
      { id: 4, name: "CiaTok 1", Image: "ciatok.jpg", price: 280000 },
      { id: 5, name: "CiaTok 2", Image: "ciatok.jpg", price: 300000 },
      { id: 6, name: "CiaTok 3", Image: "ciatok.jpg", price: 380000 },
    ],
  }));

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
    `https://wa.me/62xxxxxxxxxxxxxx?text=${encodeURIComponent(message)}`
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
    email: "",
    phone: "",

    kirimPesan() {
      if (!this.name || !this.email || !this.phone) {
        alert("Semua field harus diisi.");
        return;
      }

      const message = `Nama: ${this.name}%0AEmail: ${this.email}%0ANomor Telepon: ${this.phone}`;
      const whatsappLink = `https://wa.me/6289602799141?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    },
  }));
});
