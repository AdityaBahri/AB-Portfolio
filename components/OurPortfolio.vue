<template>
  <section class="portfolio-section">
    <h2 class="section-title">Articles</h2>
    <div class="portfolio-grid">
      <!-- Menggunakan v-for untuk mengulang data artikel -->
      <NuxtLink
        v-for="article in articles"
        :key="article.slug"
        :to="`/articles/${article.slug}`"
        class="portfolio-item"
      >
        <img :src="article.image" :alt="article.title" />
        <div class="overlay">
          <h3>{{ article.title }}</h3>
          <!-- <p>{{ article.category }}</p> Ini bisa ditambahkan jika ada kategori -->
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// Data artikel yang akan ditampilkan di halaman portofolio
// 'slug' akan digunakan untuk membuat URL dinamis
const articles = [
  {
    title: "Djikstra's Algorithm",
    slug: "dijkstras-algorithm", // Gunakan slug yang clean untuk URL
    image: "/10.jpeg",
  },
  {
    title: "Kahn's Algorithm",
    slug: "kahns-algorithm",
    image: "/9.jpeg",
  },
  {
    title: "Depth-First Search (DFS)",
    slug: "depth-first-search-dfs",
    image: "/8.jpeg",
  },
  {
    title: "Breadth-First Search (BFS)",
    slug: "breadth-first-search-bfs",
    image: "/7.jpeg",
  },
  {
    title: "Rat in Maze",
    slug: "rat-in-maze",
    image: "/6.jpeg",
  },
  {
    title: "Subset Sum Problem",
    slug: "subset-sum-problem",
    image: "/5.jpeg",
  },
  {
    title: "N-Queens Problem",
    slug: "n-queens-problem",
    image: "/4.jpeg",
  },
  {
    title: "Huffman Coding",
    slug: "huffman-coding",
    image: "/3.jpeg",
  },
  {
    title: "Fractional Knapsack",
    slug: "fractional-knapsack",
    image: "/2.jpeg",
  },
  {
    title: "Activity Selection Problem",
    slug: "activity-selection-problem",
    image: "/1.jpeg",
  },
];
</script>

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
  display: block; /* Agar link mengisi seluruh item */
  text-decoration: none; /* Hapus garis bawah default link */
  color: inherit; /* Warisi warna teks dari parent */
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