<template>
  <section class="testimonial-section">
    <div class="testimonial-wrapper">
      <div
        class="testimonial-container"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-content"
        >
          <img :src="testimonial.image" alt="Client Avatar" class="client-avatar" />
          <p class="quote">
            "{{ testimonial.quote }}"
          </p>
          <p class="client-name">{{ testimonial.name }}</p>
        </div>
      </div>
    </div>

    <div class="testimonial-nav">
      <button class="nav-arrow" @click="prevSlide"><IconsLeftArrow /></button>
      <button class="nav-arrow" @click="nextSlide"><IconsRightArrow /></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type TTestimonials = {
  image: string;
  quote: string;
  name: string;
}

const testimonials: TTestimonials[] = [
  {
    image: "/cici-avatar.jpg",
    quote: "Adit adalah desainer UI/UX yang sangat profesional dan selalu memberikan hasil luar biasa.",
    name: "Cici"
  },{
    image: "/aril-avatar.jpg",
    quote: "Keahlian Adit dalam UX benar-benar membuat produk kami lebih mudah digunakan dan menarik.",
    name: "Aril"
  },{
    image: "/wahyu-avatar.jpg",
    quote: "Desain Adit selalu intuitif, user-friendly, dan melebihi ekspektasi kami. Sangat direkomendasikan!",
    name: "Wahyu"
  },{
    image: "/ucup-avatar.jpg",
    quote: "Adit memiliki pemahaman mendalam tentang pengalaman pengguna, karyanya sangat inovatif.",
    name: "Ucup"
  },{
    image: "/jon-avatar.jpg",
    quote: "Sangat senang bekerja dengan Adit. Desain UI/UX-nya selalu tepat sasaran dan efektif.",
    name: "Jon"
  },{
    image: "/ivan-avatar.jpg",
    quote: "Adit adalah aset berharga, mampu mengubah ide rumit menjadi antarmuka yang indah.",
    name: "Ibot"
  },{
    image: "/sarham-avatar.jpg",
    quote: "Terima kasih Adit, desain UI/UX-mu telah meningkatkan kepuasan pengguna produk kami secara signifikan.",
    name: "Sarham"
  },{
    image: "/fadil-avatar.jpg",
    quote: "Profesionalisme dan kreativitas Adit dalam UI/UX sungguh mengagumkan. Hasilnya sempurna!",
    name: "Fadil"
  },
]

const currentIndex = ref(0)
const itemWidth = 350 // Lebar total satu item testimonial termasuk padding/margin
const visibleItems = 3 // Jumlah item yang terlihat sekaligus

// maxIndex akan menjadi jumlah slide yang bisa digeser
// Jika total 6 item dan 3 terlihat, maka ada 6 - 3 = 3 item yang bisa disembunyikan
// Jadi, kita bisa geser sebanyak 3 kali (indeks 0, 1, 2)
const maxIndex = computed(() => Math.max(0, Math.ceil(testimonials.length / visibleItems) - 1));


const translateX = computed(() => {
  // Geser sebanyak currentIndex * (visibleItems * itemWidth)
  // Ini memastikan kita menggeser sejumlah lebar 3 item
  return -currentIndex.value * (visibleItems * itemWidth);
});


const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  } else {
    // Kembali ke slide pertama jika sudah di akhir
    currentIndex.value = 0;
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    // Pergi ke slide terakhir jika sudah di awal
    currentIndex.value = maxIndex.value;
  }
}
</script>

<style scoped>
.testimonial-section {
  padding: 80px 40px;
  background-color: #2b2b41;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
  position: relative;
  overflow: hidden;
}

.testimonial-wrapper {
  width: 100%;
  max-width: calc(350px * 3); /* Tetap 3 item terlihat */
  margin: 0 auto;
  overflow: hidden; /* Penting untuk menyembunyikan item yang tidak terlihat */
}

.testimonial-container {
  display: flex;
  transition: transform 0.5s ease;
  /* Hapus width: max-content; */
  /* Untuk centering, bisa dilakukan di wrapper jika hanya 3 item */
  /* justify-content: center; */ /* Ini akan memusatkan jika ada sisa ruang */
}

.testimonial-content {
  width: 350px; /* Atur width setiap item sama dengan itemWidth */
  padding: 0 10px; /* Sesuaikan padding agar total width 350px */
  flex-shrink: 0;
  margin-bottom: 30px;
  box-sizing: border-box; /* Pastikan padding dihitung dalam width */
  
  /* Untuk memusatkan konten di dalam setiap testimoni */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.client-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #00bcd4;
}

.quote {
  font-size: 1.1em;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 15px;
  height: 120px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.client-name {
  font-size: 1.1em;
  font-weight: bold;
  color: #00bcd4;
}

.testimonial-nav {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.nav-arrow {
  background-color: #00bcd4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background-color: #0097a7;
  transform: scale(1.05);
}

/* Media Queries */
@media (max-width: 1200px) {
  .testimonial-wrapper {
    max-width: calc(350px * 2); /* 2 item untuk tablet, jika itemWidth tetap 350px */
  }
  .testimonial-content {
    width: 350px; /* Tetap 350px untuk masing-masing item, overflow akan disembunyikan */
  }
  /* Jika ingin 2 item saja terlihat penuh, sesuaikan itemWidth dan visibleItems untuk breakpoint ini */
  /* Contoh:
  .testimonial-wrapper { max-width: calc(300px * 2); }
  .testimonial-content { width: 300px; }
  */
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 20px;
    height: auto;
  }
  .testimonial-wrapper {
    max-width: 350px; /* 1 item untuk mobile, jika itemWidth tetap 350px */
  }
  .testimonial-content {
    width: 350px;
    padding: 0 10px;
  }
  .quote {
    font-size: 1em;
    height: 110px;
    -webkit-line-clamp: 4;
  }
  .client-avatar {
    width: 80px;
    height: 80px;
  }
  .nav-arrow {
    width: 40px;
    height: 40px;
  }
}
</style>