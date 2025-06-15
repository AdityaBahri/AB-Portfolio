<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <SocialLinks />
      <MyServices />
      <OurPortfolio />
      <TestimonialSection />
      <CallToAction />
    </main>
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
  /* Memberi sedikit jarak antara header dan konten utama jika diperlukan */
  padding-top: 0;
}
</style>