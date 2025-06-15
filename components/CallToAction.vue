<template>
  <section class="cta-section">
    <div class="cta-content">
      <h2>Want to make awesome and impactful Product?</h2>
      <button class="cta-button">Let's Discuss</button>
    </div>
    <div class="cta-image">
      <img src="/laptop-mockup.png" alt="Laptop Mockup" />
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  background-color: #1a1a2e;
  color: white;
  gap: 50px;
  flex-wrap: wrap; /* Agar responsif */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-content {
  flex: 1;
  max-width: 600px;
  text-align: right; /* Sesuai dengan desain */
}

.cta-content h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  line-height: 1.2;
}

.cta-button {
  background-color: #00bcd4;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0097a7;
}

.cta-image {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-image img {
  max-width: 100%;
  height: auto;
}

/* Responsif */
@media (max-width: 768px) {
  .cta-section {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
  .cta-content {
    order: 2; /* Pindahkan konten ke bawah di mobile */
    text-align: center;
  }
  .cta-image {
    order: 1; /* Pindahkan gambar ke atas di mobile */
    margin-bottom: 30px;
  }
  .cta-content h2 {
    font-size: 1.8em;
  }
}
</style>