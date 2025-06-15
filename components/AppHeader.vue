<template>
  <header class="app-header">
    <div class="logo">
      <img src="/logo.png" alt="Logo" class="logo-img" />
      <span class="logo-text">AB.</span>
    </div>
    <nav class="nav-menu">
      <ul>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

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
}

.nav-menu a:hover,
.nav-menu a.router-link-active { /* Gaya untuk link aktif Nuxt */
  color: #00bcd4; /* Contoh warna hover/aktif */
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