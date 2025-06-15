<template>
  <section class="portfolio-section">
    <h2 class="section-title">Our Portofolio</h2>
    <div class="portfolio-grid">
      <div class="portfolio-item">
        <img src="/portfolio-1.jpg" alt="Project 1" />
        <div class="overlay">
          <h3>Vibe Music Mobile App</h3>
          <p>Mobile App</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="/portfolio-2.jpg" alt="Project 2" />
        <div class="overlay">
          <h3>Streaming Mobile App</h3>
          <p>Mobile App</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="/portfolio-3.jpg" alt="Project 3" />
        <div class="overlay">
          <h3>Creative Digital Agency</h3>
          <p>Website</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="/portfolio-4.jpg" alt="Project 4" />
        <div class="overlay">
          <h3>Postbot Mobile App</h3>
          <p>Mobile App</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="/portfolio-5.jpg" alt="Project 5" />
        <div class="overlay">
          <h3>Multimedia Design Prof.</h3>
          <p>Graphic Design</p>
        </div>
      </div>
      <div class="portfolio-item">
        <img src="/portfolio-6.jpg" alt="Project 6" />
        <div class="overlay">
          <h3>Parking Mobile App</h3>
          <p>Mobile App</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  padding: 80px 40px;
  background-color: #1a1a2e;
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Kolom responsif */
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.portfolio-item img {
  width: 100%;
  height: 200px; /* Tinggi tetap untuk gambar */
  object-fit: cover; /* Pastikan gambar mengisi area tanpa distorsi */
  display: block;
  transition: transform 0.3s ease;
}

.portfolio-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px; /* Padding untuk teks di overlay */
  box-sizing: border-box; /* Agar padding tidak menambah lebar/tinggi */
}

.portfolio-item:hover .overlay {
  opacity: 1;
}

.portfolio-item:hover img {
  transform: scale(1.05); /* Efek zoom gambar saat hover */
}

.overlay h3 {
  color: white;
  font-size: 1.5em;
  margin-bottom: 5px;
  text-align: center;
}

.overlay p {
  color: #ccc;
  font-size: 0.9em;
  text-align: center;
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 60px 20px;
  }
}
</style>