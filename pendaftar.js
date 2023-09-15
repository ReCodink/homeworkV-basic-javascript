// Objek untuk menyimpan data pendaftar
class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

// Array untuk menyimpan data pendaftar
const pendaftarList = [];

// Fungsi untuk menampilkan data pendaftar di tabel
function tampilPendaftarTable() {
    const tableBody = document.getElementById('pendaftar-list');
    tableBody.innerHTML = '';
    pendaftarList.forEach(pendaftar => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>${pendaftar.uangSangu}</td>`;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menghitung rata-rata uang sangu dan umur
function kalkulasiRataRata() {
    const totalSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
    const totalAge = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    const averageSangu = pendaftarList.length > 0 ? totalSangu / pendaftarList.length : 0;
    const averageAge = pendaftarList.length > 0 ? totalAge / pendaftarList.length : 0;
    document.getElementById('average-sangu').textContent = averageSangu.toFixed(2);
    document.getElementById('average-age').textContent = averageAge.toFixed(2);
}

// Event listener untuk form registrasi
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uang-sangu').value);

    // Validasi input
    if (nama.length < 10) {
        alert('Nama minimal 10 karakter.');
        return;
    }
    if (umur < 25) {
        alert('Umur minimal 25 tahun.');
        return;
    }
    if (uangSangu < 100000 || uangSangu > 1000000) {
        alert('Uang Sangu minimal 100 ribu dan maksimal 1 juta.');
        return;
    }

    // Tambahkan data pendaftar baru ke array
    const pendaftar = new Pendaftar(nama, umur, uangSangu);
    pendaftarList.push(pendaftar);

    // Kosongkan form
    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uang-sangu').value = '';

    // Tampilkan ulang tabel dan hitung ulang rata-rata
    tampilPendaftarTable();
    kalkulasiRataRata();
});
