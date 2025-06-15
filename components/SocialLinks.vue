<template>
  <section class="social-links-section">
    <a href="https://dribbble.com/acee10" target="_blank" class="social-icon">Dribbble</a>
    <a href="https://instagram.com/adityabhri_" target="_blank" class="social-icon">Instagram</a>
    <a href="https://wa.me/6281341180174" target="_blank" class="social-icon">WhatsApp</a>
  </section>
</template>

<style scoped>
.social-links-section {
  display: flex;
  justify-content: center;
  gap: 50px; /* Sesuaikan jarak antar ikon */
  padding: 40px 20px;
  background-color: #1a1a2e; /* Warna latar belakang gelap */
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Tambahan border atas */
}

.social-icon {
  font-size: 1.2em;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #00bcd4;
}

@media (max-width: 768px) {
  .social-links-section {
    flex-wrap: wrap; /* Izinkan wrap pada layar kecil */
    gap: 20px; /* Kurangi jarak */
  }
}
</style>