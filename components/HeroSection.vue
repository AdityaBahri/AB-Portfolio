<template>
  <section class="hero-section">
    <div class="background-effect"></div>

    <div class="hero-content">
      <p class="role">UI/UX Designer</p>
      <h1 class="name">Aditya Bahri</h1>
      <p class="description">
        "Simplicity is the ultimate sophistication." - Leonardo da Vinci
      </p>
      <!-- <button class="contact-button">Let's Talk</button> -->
      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">1+</span>
          <span class="stat-label">Years of Experience</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Complete Project</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-label">Client</span>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img src="/stefan-william.jpg" alt="Stefan William" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  min-height: 80vh; /* Sesuaikan tinggi */
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); /* Contoh gradien latar belakang */
  color: white;
  position: relative;
  overflow: hidden;
  gap: 50px; /* Jarak antara konten dan gambar */
}

.background-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/background-pattern.png') no-repeat center center / cover; /* Contoh pattern background */
  opacity: 0.1; /* Sesuaikan opacity */
  z-index: 1;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2; /* Agar konten di atas background effect */
}

.role {
  font-size: 1.2em;
  color: #00bcd4; /* Warna aksen */
  margin-bottom: 10px;
}

.name {
  font-size: 3.5em;
  margin-bottom: 20px;
  line-height: 1.1;
}

.description {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 30px;
}

.contact-button {
  background-color: #00bcd4; /* Warna tombol */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #0097a7;
}

.stats {
  display: flex;
  margin-top: 40px;
  gap: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.2em;
  font-weight: bold;
  color: #00bcd4;
  display: block;
}

.stat-label {
  font-size: 0.9em;
  color: #ccc;
}

.hero-image {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.hero-image img {
  max-width: 80%; /* Sesuaikan ukuran gambar */
  height: auto;
  border-radius: 10px; /* Opsional: sedikit border-radius */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Efek bayangan */
}

/* Responsif dasar */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
  .hero-content {
    margin-bottom: 40px;
  }
  .hero-image {
    order: -1; /* Pindahkan gambar ke atas di mode mobile */
    margin-bottom: 40px;
  }
  .name {
    font-size: 2.5em;
  }
  .stats {
    flex-direction: column;
    gap: 15px;
  }
}
</style>