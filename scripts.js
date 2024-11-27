function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}

function showBlogDetail(blogId) {
    navigateTo(blogId);
}
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const textToType = "Temukan kisah dan pengalaman menarik di sini";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Kecepatan mengetik (100ms per karakter)
        } else {
            setTimeout(resetText, 2000); // Tunggu 2 detik sebelum ulangi
        }
    }

    function resetText() {
        textElement.textContent = ""; // Hapus teks
        charIndex = 0; // Mulai ulang
        typeText();
    }

    typeText(); // Jalankan animasi saat halaman dimuat
});
