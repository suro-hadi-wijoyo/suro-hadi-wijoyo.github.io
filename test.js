// Ambil semua elemen produk
const items = document.querySelectorAll(".product-offer-item");

// Proses tiap produk
const result = Array.from(items).map(el => {
  const href = el.querySelector("a")?.getAttribute("href") || "";
  const match = href.match(/\/offer\/product_offer\/(\d+)/);
  const id = match ? match[1] : null;

  const img = el.querySelector(".ItemCard__image img")?.src || "";

  return { id, img };
});

// Ubah ke JSON
const json = JSON.stringify(result, null, 2);

// Buat file dan trigger download otomatis
const blob = new Blob([json], { type: "application/json" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "product_data.json";
a.click();
URL.revokeObjectURL(url);

console.log("✅ File product_data.json berhasil dibuat dan diunduh!");
console.table(result);
