<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $pesan = htmlspecialchars($_POST['pesan']);
    
    // Simpan atau kirimkan data (misalnya simpan ke database, atau kirim email)
    // Sebagai contoh, simpan dalam file teks
    $file = fopen("kritiksaran.txt", "a");
    fwrite($file, "Nama: $nama\nEmail: $email\nPesan: $pesan\n\n");
    fclose($file);
    
    // Redirect ke halaman sukses atau tampilkan pesan
    echo "Terima kasih atas kritik dan sarannya!";
}
?>
