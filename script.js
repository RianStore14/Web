function buyNow(productName) {
    const whatsappNumber = "6281356614039"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin membeli produk: ${productName}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
