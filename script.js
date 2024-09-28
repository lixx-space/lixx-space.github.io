document.addEventListener("DOMContentLoaded", function() {
    // Seleksi elemen notifikasi
    const scrollReminder = document.getElementById('scrollReminder');
    
    // Tampilkan notifikasi saat halaman dibuka
    setTimeout(() => {
        scrollReminder.classList.add('show');
    }, 500); // Tampil setelah 500ms

    // Hilangkan notifikasi setelah 5 detik
    setTimeout(() => {
        scrollReminder.classList.remove('show');
    }, 2000);
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    // Simpan ke localStorage
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push({ name, feedback });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Tampilkan hasil di bawah formulir
    document.getElementById('result').innerHTML = `<h3>Terima kasih, ${name}!</h3><p>Kritik dan saran Anda telah diterima:</p><p>${feedback}</p>`;

    // Kosongkan formulir
    this.reset();
});