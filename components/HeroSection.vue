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

      <!-- Bagian Skill / Software Baru dipindahkan ke dalam hero-content -->
      <div class="tech-scroller-wrapper">
        <h3 class="skills-title">Beginner in/with</h3>
        <div
          class="tech-scroller w-full overflow-hidden"
          > <!-- SINTAKS [mask-image] DIHAPUS DARI SINI -->
          <div class="flex gap-12 animate-scroll">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="flex items-center gap-3 flex-shrink-0 text-gray-400 skill-item"
            >
              <img :src="tech.logo" :alt="tech.name" class="skill-logo" />
              <span class="text-xl font-semibold">{{ tech.name }}</span>
            </div>

            <!-- Duplikasi konten untuk efek scrolling tak terbatas yang mulus -->
            <div
              v-for="tech in techStack"
              :key="`${tech.name}-duplicate`"
              class="flex items-center gap-3 flex-shrink-0 text-gray-400 skill-item"
            >
              <img :src="tech.logo" :alt="tech.name" class="skill-logo" />
              <span class="text-xl font-semibold">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img src="/stefan-william.jpg" alt="Stefan William" />
    </div>
  </section>
</template>

<script setup>
// Daftar teknologi yang Anda kuasai dengan path ke file logo di folder public/skills/
const techStack = [
  { name: 'Nuxt', logo: '/skills/nuxt.png' },
  { name: 'HTML', logo: '/skills/html.png' },
  { name: 'CSS', logo: '/skills/css.png' },
  { name: 'CorelDraw', logo: '/skills/coreldraw.png' },
  { name: 'Photoshop', logo: '/skills/photoshop.png' },
  { name: 'Tailwind CSS', logo: '/skills/tailwind.png' },
  { name: 'JavaScript', logo: '/skills/javascript.png' },
  { name: 'Python', logo: '/skills/python.png' },
  { name: 'Node.js', logo: '/skills/nodejs.png' },
  { name: 'TypeScript', logo: '/skills/typescript.png' },
  { name: 'Git', logo: '/skills/git.png' },
  // Tambahkan skill lain jika diperlukan
];
</script>

<style scoped>
.hero-section {
  display: flex; /* Menggunakan flexbox untuk tata letak utama */
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  min-height: 80vh;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: white;
  position: relative;
  overflow: hidden;
  gap: 50px;
  /* Hapus flex-direction: column; di sini untuk desktop. Akan diterapkan di media query */
}

.background-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/background-pattern.png') no-repeat center center / cover;
  opacity: 0.1;
  z-index: 1;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
  text-align: left;
  display: flex; /* Buat hero-content juga flex container */
  flex-direction: column; /* Tata elemen di dalamnya secara vertikal */
  align-items: flex-start; /* Sejajarkan ke kiri */
}

.role {
  font-size: 1.2em;
  color: #00bcd4;
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
  background-color: #00bcd4;
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
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* --- Bagian Skill / Software --- */
.tech-scroller-wrapper {
  width: 100%; /* Agar mengambil lebar penuh hero-content */
  margin-top: 60px; /* Jarak dari konten di atasnya */
  box-sizing: border-box;
  color: #c792ea; /* Warna ungu untuk teks skill */
}

.skills-title {
  font-size: 1.5em;
  color: #c792ea; /* Warna ungu seperti di gambar */
  margin-bottom: 20px;
  text-align: left; /* Pastikan judul tetap ke kiri */
}

.tech-scroller {
  width: 100%;
  overflow: hidden;
  /* SINTAKS [mask-image] SEKARANG DI SINI DI DALAM CSS */
  mask-image: linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%);
}

/* Tailwind-like classes, direplikasi di sini untuk demonstrasi */
.w-full { width: 100%; }
.overflow-hidden { overflow: hidden; }

.flex { display: flex; }
.gap-12 { gap: 3rem; /* 3rem = 48px */ }
.flex-shrink-0 { flex-shrink: 0; }
.items-center { align-items: center; }
.text-gray-400 { color: #9ca3af; /* Warna teks ikon/nama, sesuaikan jika ingin ungu seperti judul */ }
.text-xl { font-size: 1.25rem; }
.font-semibold { font-weight: 600; }

/* Styling untuk item skill */
.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  flex-shrink: 0;
}

.skill-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}

/* Animasi Scrolling */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
  width: max-content;
  display: flex;
}

/* Responsif dasar */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column; /* Stack konten dan gambar di mobile */
    text-align: center;
    padding: 60px 20px;
  }
  .hero-content {
    margin-bottom: 40px;
    text-align: center;
    align-items: center; /* Pusatkan item di hero-content untuk mobile */
  }
  .hero-image {
    order: -1; /* Pindahkan gambar ke atas di mobile */
    margin-bottom: 40px;
  }
  .name {
    font-size: 2.5em;
  }
  .stats {
    flex-direction: column;
    gap: 15px;
  }
  .tech-scroller-wrapper {
    padding-left: 0; /* Hapus padding-left di mobile jika hero-content di tengah */
    padding-right: 0;
  }
  .skills-title {
    text-align: center; /* Pusatkan judul skill di mobile */
  }
  .animate-scroll {
    animation-duration: 25s;
  }
  .gap-12 {
    gap: 1.5rem;
  }
  .text-xl {
    font-size: 1.1rem;
  }
  .skill-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
