<template>
  <div>
    <!-- AppHeader tetap di sini jika Anda tidak menggunakan layouts/default.vue -->
    <!-- Jika Anda menggunakan layouts/default.vue, maka AppHeader ini dihapus -->
    <AppHeader />
    <main>
      <!-- Tambahkan ID ke komponen yang ingin menjadi target scroll -->
      <HeroSection id="hero-section" />
      <SocialLinks />
      <MyServices />
      <OurPortfolio id="portfolio-section" /> <!-- Beri ID untuk bagian Articles -->
      <TestimonialSection id="testimonial-section" /> <!-- Beri ID untuk bagian Testimonial -->
      <!-- Jika Anda memiliki bagian CallToAction, pastikan juga ada di sini -->
      <!-- <CallToAction /> -->
    </main>
    <!-- AppFooter tetap di sini jika Anda tidak menggunakan layouts/default.vue -->
    <!-- Jika Anda menggunakan layouts/default.vue, maka AppFooter ini dihapus -->
    <AppFooter />
  </div>
</template>

<script setup>
// Script setup adalah sintaks Vue 3 Composition API yang direkomendasikan di Nuxt 3.
// Tidak perlu import komponen dari folder 'components' karena Nuxt akan meng-auto-import-nya.
// Anda bisa menambahkan logika spesifik untuk halaman beranda di sini.
</script>

<style scoped>
/* Anda bisa menambahkan gaya CSS khusus untuk halaman ini jika diperlukan.
   Biasanya gaya umum diletakkan di main.css dan komponen memiliki gaya scopednya sendiri. */
main {
  /*
    Jika header Anda memiliki tinggi tetap dan posisinya sticky/fixed,
    Anda mungkin perlu menyesuaikan padding-top pada 'main' atau pada bagian pertama konten
    agar tidak tertutup header saat di-scroll.
    Misalnya, jika tinggi header sekitar 80px:
    padding-top: 80px;
  */
  padding-top: 0;
}
</style>
