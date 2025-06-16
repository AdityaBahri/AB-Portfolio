<template>
  <header class="app-header">
    <div class="logo">
      <img src="/logo.png" alt="Logo" class="logo-img" />
      <span class="logo-text">AB.</span> <!-- Sesuaikan logo text jika sudah diganti -->
    </div>
    <nav class="nav-menu">
      <ul>
        <!-- Gunakan <a> tag dan tambahkan @click.prevent -->
        <li><a href="#hero-section" @click.prevent="scrollToSection('hero-section')">Home</a></li>
        <li><a href="#portfolio-section" @click.prevent="scrollToSection('portfolio-section')">Articles</a></li>
        <li><a href="#testimonial-section" @click.prevent="scrollToSection('testimonial-section')">Testimonial</a></li>
        <!-- Anda bisa menambahkan link lain di sini jika diperlukan, seperti "Services" atau "Contact" -->
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Fungsi untuk menggulir ke bagian tertentu di halaman
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Gunakan behavior 'smooth' untuk animasi gulir yang mulus
    element.scrollIntoView({ behavior: 'smooth' });

    // Opsional: Jika Anda ingin menyesuaikan posisi scroll
    // agar header tidak menutupi bagian atas target, Anda bisa menambahkan offset.
    // const headerOffset = 80; // Sesuaikan dengan tinggi header Anda
    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    // window.scrollTo({
    //      top: offsetPosition,
    //      behavior: "smooth"
    // });
  }
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.3); /* Untuk efek transparan gelap */
  color: white;
  position: sticky; /* Agar header tetap di atas saat di-scroll */
  top: 0;
  z-index: 1000; /* Pastikan di atas elemen lain */
  backdrop-filter: blur(5px); /* Efek blur seperti di desain */
  -webkit-backdrop-filter: blur(5px); /* Untuk kompatibilitas Safari */
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 30px; /* Sesuaikan ukuran logo */
  height: 30px;
  margin-right: 10px;
  object-fit: contain;
}

.logo-text {
  font-weight: bold;
  font-size: 1.5em;
  color: #fff; /* Pastikan warna teks logo terlihat */
}

.nav-menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin-left: 30px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer; /* Menunjukkan bahwa ini adalah elemen yang dapat diklik */
}

.nav-menu a:hover {
  color: #00bcd4; /* Contoh warna hover */
}

/* Responsif untuk Navigasi (Hamburger Menu bisa ditambahkan nanti) */
@media (max-width: 768px) {
  .nav-menu {
    display: none; /* Sembunyikan menu di mobile, bisa diganti dengan hamburger */
  }
  .app-header {
    justify-content: center; /* Pusatkan logo di mobile */
  }
}
</style>
