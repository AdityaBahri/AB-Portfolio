<template>
  <div class="article-detail-page">
    <div class="back-link-container">
      <NuxtLink to="/" class="back-link">
        &leftarrow; Kembali ke Daftar Artikel
      </NuxtLink>
    </div>

    <header class="article-header">
      <!-- Menampilkan judul artikel -->
      <h1>{{ article.title }}</h1>
      <p class="article-description">{{ article.description }}</p>
    </header>

    <section class="article-content">
      <!-- Menggunakan v-html untuk merender konten HTML yang kaya -->
      <div v-html="article.fullContent" class="rich-text-content"></div>

      <!-- Contoh bagian tambahan jika ada -->
      <div v-if="article.author" class="article-meta">
        Penulis: {{ article.author }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useHead } from '#app';

// Mengambil parameter rute (slug) dari URL
const route = useRoute();
const slug = route.params.slug;

// --- Data Artikel Simulasi ---
// Dalam aplikasi nyata, Anda akan mengambil data ini dari API, database, atau file Markdown
// berdasarkan nilai 'slug'. Untuk tujuan demonstrasi, kita menggunakan objek data dummy.
const articlesData = {
  'dijkstras-algorithm': {
    title: "Algoritma Djikstra",
    description: "Sebuah panduan untuk memahami salah satu algoritma pencarian rute terpendek yang paling fundamental di dunia ilmu komputer.",
    fullContent: `
      <h2>Apa Itu Algoritma Djikstra?</h2>
      <p>Algoritma Djikstra adalah sebuah metode klasik dan efisien dalam teori graf yang berfungsi untuk menemukan jalur terpendek antara satu titik (disebut "node sumber") dengan semua titik lain dalam sebuah graf yang memiliki bobot (jarak atau biaya) non-negatif. Diciptakan oleh seorang ilmuwan komputer legendaris asal Belanda, Edsger W. Djikstra pada tahun 1956, algoritma ini menjadi fondasi bagi banyak aplikasi modern yang kita gunakan sehari-hari.</p>
      <h3>Kegunaannya sangat luas, di antaranya:</h3>
      <ul>
        <li><strong>Sistem Navigasi GPS:</strong> Menentukan rute tercepat dari lokasimu ke tujuan.</li>
        <li><strong>Jaringan Komputer:</strong> Membantu router menentukan jalur pengiriman data yang paling efisien di internet.</li>
        <li><strong>Desain Game:</strong> Mengarahkan karakter non-pemain (NPC) untuk bergerak menuju tujuannya dengan cara paling optimal.</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>Intuisi di balik Djikstra adalah pendekatan "rakus" (greedy). Pada setiap langkah, algoritma ini dengan cerdas selalu memilih jalur terpendek berikutnya yang bisa dijangkau. Prosesnya bisa dibayangkan seperti menyebarkan gelombang dari titik awal, di mana gelombang tersebut selalu mencapai titik terdekat terlebih dahulu.</p>
      <h3>Persiapan (Inisialisasi):</h3>
      <ul>
        <li>Tentukan titik awal, jarak ke titik ini adalah 0. Jarak ke semua titik lain diatur sebagai "tak terhingga".</li>
        <li>Siapkan dua set: satu untuk node yang "belum dikunjungi" dan satu untuk yang "sudah dikunjungi" (awalnya kosong).</li>
      </ul>
      <h3>Proses Iteratif:</h3>
      <ul>
        <li>Selama masih ada node di set "belum dikunjungi", pilih node dengan jarak terpendek yang tercatat.</li>
        <li>Pindahkan node terpilih ke set "sudah dikunjungi".</li>
        <li>Untuk setiap tetangga dari node yang baru saja dikunjungi, hitung jaraknya dari titik awal. Jika jarak baru ini lebih pendek dari yang tercatat sebelumnya, perbarui jaraknya.</li>
      </ul>
      <h3>Finalisasi:</h3>
      <ul>
        <li>Ulangi proses hingga set "belum dikunjungi" kosong. Hasil akhirnya adalah peta jarak terpendek dari titik awal ke semua titik lain yang terjangkau.</li>
      </ul>

      <h2>Contoh Implementasi (JavaScript)</h2>
      <p>Berikut adalah contoh implementasi sederhana menggunakan JavaScript yang relevan dengan ekosistem web development:</p>
      <pre><code>
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort((a, b) => a.priority - b.priority); // Simple sort for demo
  }

  dequeue() {
    return this.values.shift();
  }
}

function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  // Inisialisasi
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;
  pq.enqueue(startNode, 0);

  while (pq.values.length) {
    let smallest = pq.dequeue().val;

    if (distances[smallest] === Infinity) continue; // Skip if already processed or unreachable

    for (let neighbor in graph[smallest]) {
      let nextNode = neighbor;
      let weight = graph[smallest][neighbor];
      let newDistance = distances[smallest] + weight;

      if (newDistance < distances[nextNode]) {
        distances[nextNode] = newDistance;
        previous[nextNode] = smallest;
        pq.enqueue(nextNode, newDistance);
      }
    }
  }
  return distances;
}

// Contoh penggunaan:
const graph = {
  A: { B: 4, C: 2 },
  B: { E: 3 },
  C: { D: 2, F: 4 },
  D: { E: 3 },
  E: {},
  F: { E: 1 }
};

// console.log(dijkstra(graph, 'A'));
// Output: { A: 0, B: 4, C: 2, D: 4, E: 7, F: 6 } (tergantung implementasi graph)
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Optimal:</strong> Dijamin menemukan jalur terpendek jika tidak ada bobot negatif.</li>
            <li><strong>Intuitif:</strong> Konsepnya relatif mudah dipahami dengan pendekatan "greedy".</li>
            <li><strong>Aplikatif:</strong> Menjadi dasar untuk banyak algoritma dan aplikasi di dunia nyata.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Bobot Negatif:</strong> Tidak dapat bekerja dengan benar jika graf memiliki sisi berbobot negatif.</li>
            <li><strong>Kinerja:</strong> Untuk graf yang sangat padat, bisa lebih lambat dibandingkan algoritma lain seperti A*.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Algoritma Djikstra adalah alat yang sangat kuat dan esensial dalam kotak peralatan seorang programmer. Dengan memahami cara kerjanya, Anda tidak hanya belajar tentang teori graf, tetapi juga mendapatkan wawasan tentang bagaimana masalah optimasi rute dipecahkan dalam skala besar, dari internet hingga peta digital.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'kahns-algorithm': {
    title: "Kahn's Algorithm",
    description: "Memahami algoritma Kahn untuk pengurutan topologi (topological sorting) pada Directed Acyclic Graph (DAG).",
    fullContent: `
      <h2>Apa Itu Kahn's Algorithm?</h2>
      <p>Kahn's Algorithm adalah salah satu metode untuk melakukan topological sorting pada sebuah Directed Acyclic Graph (DAG). Pengurutan topologi adalah penataan linier dari node-node sedemikian rupa sehingga untuk setiap edge terarah U -> V, node U selalu datang sebelum V dalam penataan tersebut.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Penjadwalan Tugas:</strong> Ketika ada ketergantungan antar tugas (misalnya, Tugas B tidak bisa dimulai sebelum Tugas A selesai).</li>
        <li><strong>Penyelesaian Ketergantungan:</strong> Dalam sistem build (seperti Makefiles) atau manajemen paket.</li>
        <li><strong>Kursus Prasyarat:</strong> Menentukan urutan mata kuliah yang harus diambil.</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>Algoritma Kahn didasarkan pada konsep "in-degree", yaitu jumlah edge yang masuk ke sebuah node. Algoritma ini beroperasi secara iteratif:</p>
      <ol>
        <li><strong>Inisialisasi:</strong> Hitung in-degree untuk setiap node dalam graf. Inisialisasi antrian dengan semua node yang memiliki in-degree nol.</li>
        <li><strong>Proses Iteratif:</strong> Selama antrian tidak kosong, dequeue (keluarkan) sebuah node dari antrian dan tambahkan ke daftar hasil pengurutan topologi. Untuk setiap tetangga dari node yang baru dikeluarkan, kurangi in-degree-nya. Jika in-degree tetangga menjadi nol, enqueue (masukkan) tetangga tersebut ke antrian.</li>
        <li><strong>Verifikasi:</strong> Setelah antrian kosong, jika jumlah node dalam daftar hasil sama dengan jumlah total node di graf, maka pengurutan topologi berhasil. Jika tidak, graf tersebut mengandung siklus (bukan DAG).</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function kahn(graph):
  L = empty list (hasil pengurutan topologi)
  S = queue of nodes with in-degree 0

  // 1. Hitung in-degree dan inisialisasi antrian S
  for each node u in graph:
    calculate in-degree of u
    if in-degree of u == 0:
      S.enqueue(u)

  while S is not empty:
    u = S.dequeue()
    L.add(u)
    for each neighbor v of u:
      v.in-degree = v.in-degree - 1 // "remove edge u -> v" secara konseptual
      if v.in-degree == 0:
        S.enqueue(v)

  if L.size != total_nodes_in_graph:
    return "Graph has a cycle"
  else:
    return L
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Intuitif:</strong> Konsep in-degree mudah dipahami.</li>
            <li><strong>Deteksi Siklus:</strong> Dapat mendeteksi keberadaan siklus dalam graf.</li>
            <li><strong>Fleksibilitas:</strong> Dapat menghasilkan berbagai pengurutan topologi jika ada lebih dari satu.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Membutuhkan In-Degree:</strong> Membutuhkan perhitungan in-degree awal untuk semua node.</li>
            <li><strong>Tidak Unik:</strong> Jika ada beberapa node dengan in-degree nol, urutan hasil bisa bervariasi.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Kahn's Algorithm adalah pendekatan yang elegan dan efisien untuk topological sorting, menjadikannya alat penting dalam skenario yang melibatkan ketergantungan tugas dan analisis graf.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'depth-first-search-dfs': {
    title: "Depth-First Search (DFS)",
    description: "Eksplorasi graf dengan DFS: algoritma pencarian mendalam.",
    fullContent: `
      <h2>Apa Itu Depth-First Search (DFS)?</h2>
      <p>DFS adalah algoritma untuk melintasi atau mencari struktur data pohon atau graf. Algoritma ini memulai dari node akar (atau node arbitrary yang dipilih) dan menjelajahi sejauh mungkin di sepanjang setiap cabang sebelum "mundur" (backtracking) dan mencoba cabang lain.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Mencari Jalur:</strong> Menemukan jalur antara dua node.</li>
        <li><strong>Deteksi Siklus:</strong> Dalam graf berarah atau tak berarah.</li>
        <li><strong>Komponen Terhubung:</strong> Menemukan komponen terhubung dalam graf.</li>
        <li><strong>Pengurutan Topologi:</strong> Untuk Directed Acyclic Graph (DAG).</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>DFS bekerja secara rekursif, atau menggunakan stack eksplisit, untuk mengingat node mana yang harus dikunjungi selanjutnya saat backtracking. Proses umumnya:</p>
      <ol>
        <li>Pilih node awal dan tandai sebagai dikunjungi.</li>
        <li>Masukkan node tersebut ke stack.</li>
        <li>Selama stack tidak kosong:
          <ul>
            <li>Pop node dari stack.</li>
            <li>Untuk setiap tetangga yang belum dikunjungi dari node tersebut:
              <ul>
                <li>Tandai tetangga sebagai dikunjungi.</li>
                <li>Push tetangga ke stack.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function DFS(graph, startNode):
  visited = set()
  stack = []
  stack.push(startNode)
  visited.add(startNode)

  while stack is not empty:
    currentNode = stack.pop()
    print currentNode // Atau lakukan operasi lain pada node

    for each neighbor of currentNode:
      if neighbor is not in visited:
        visited.add(neighbor)
        stack.push(neighbor)
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Membutuhkan Memori Lebih Sedikit:</strong> Dibandingkan BFS untuk graf besar.</li>
            <li><strong>Mudah Implementasi:</strong> Dengan rekursif.</li>
            <li><strong>Deteksi Siklus:</strong> Baik untuk mendeteksi siklus.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Tidak Optimal untuk Jalur Terpendek:</strong> Tidak menjamin jalur terpendek.</li>
            <li><strong>Bisa Terjebak:</strong> Dalam graf yang sangat dalam.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>DFS adalah algoritma serbaguna yang ideal untuk tugas-tugas penjelajahan graf yang mendalam, terutama ketika menemukan jalur atau mendeteksi struktur tertentu.</p>
      `,
    author: "by Admin on June 15, 2025"
  },
  'breadth-first-search-bfs': {
    title: "Breadth-First Search (BFS)",
    description: "Eksplorasi graf dengan BFS: algoritma pencarian melebar.",
    fullContent: `
      <h2>Apa Itu Breadth-First Search (BFS)?</h2>
      <p>BFS adalah algoritma untuk melintasi atau mencari struktur data pohon atau graf. Algoritma ini memulai dari node akar (atau node arbitrary yang dipilih) dan menjelajahi semua node tetangga pada tingkat kedalaman saat ini sebelum pindah ke node pada tingkat kedalaman berikutnya.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Jalur Terpendek:</strong> Menemukan jalur terpendek dalam graf tak berbobot.</li>
        <li><strong>Crawler Web:</strong> Untuk mengindeks halaman web.</li>
        <li><strong>Jaringan Sosial:</strong> Menemukan orang dengan "derajat pemisahan" terkecil.</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>BFS menggunakan antrian (queue) untuk melacak node mana yang harus dikunjungi selanjutnya. Proses umumnya:</p>
      <ol>
        <li>Pilih node awal dan tandai sebagai dikunjungi.</li>
        <li>Masukkan node tersebut ke antrian.</li>
        <li>Selama antrian tidak kosong:
          <ul>
            <li>Dequeue node dari antrian.</li>
            <li>Untuk setiap tetangga yang belum dikunjungi dari node tersebut:
              <ul>
                <li>Tandai tetangga sebagai dikunjungi.</li>
                <li>Enqueue tetangga ke antrian.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function BFS(graph, startNode):
  visited = set()
  queue = []
  queue.push(startNode)
  visited.add(startNode)

  while queue is not empty:
    currentNode = queue.shift() // Dequeue from front
    print currentNode // Atau lakukan operasi lain pada node

    for each neighbor of currentNode:
      if neighbor is not in visited:
        visited.add(neighbor)
        queue.push(neighbor)
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Menemukan Jalur Terpendek:</strong> Dijamin menemukan jalur terpendek dalam graf tak berbobot.</li>
            <li><strong>Eksplorasi Tingkat-demi-Tingkat:</strong> Memungkinkan penjelajahan terstruktur.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Membutuhkan Memori Lebih Banyak:</strong> Untuk graf yang lebar.</li>
            <li><strong>Tidak Efisien untuk Graf Sangat Dalam:</strong> Jika target sangat jauh di kedalaman.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>BFS adalah pilihan ideal ketika Anda perlu menemukan jalur terpendek dalam graf tak berbobot atau menjelajahi graf berdasarkan tingkat kedalaman.</p>
    `,
    author: "by Admin on June 15, 2025"

  },
  'rat-in-maze': {
    title: "Rat in Maze",
    description: "Penyelesaian masalah labirin dengan algoritma backtracking.",
    fullContent: `
      <h2>Apa Itu Masalah Rat in Maze?</h2>
      <p>Masalah "Rat in Maze" adalah masalah klasik dalam ilmu komputer yang melibatkan pencarian jalur dari titik awal ke titik akhir dalam labirin, menghindari rintangan (dinding). Ini sering digunakan untuk mengilustrasikan konsep backtracking.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Algoritma Backtracking:</strong> Contoh fundamental untuk memahami backtracking.</li>
        <li><strong>Pemecahan Masalah Umum:</strong> Dapat diadaptasi untuk masalah serupa seperti menemukan jalur di papan permainan.</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>Masalah ini biasanya diselesaikan menggunakan algoritma rekursif backtracking:</p>
      <ol>
        <li>Mulai dari titik awal (ratu berada di (0,0)).</li>
        <li>Coba setiap arah yang mungkin (atas, bawah, kiri, kanan) dari posisi saat ini.</li>
        <li>Jika arah yang dipilih valid (yaitu, berada di dalam batas labirin, bukan dinding, dan belum dikunjungi dalam jalur saat ini), bergerak ke posisi tersebut.</li>
        <li>Rekursif panggil fungsi untuk posisi baru.</li>
        <li>Jika panggilan rekursif mengembalikan \`false\` (jalur saat ini mengarah ke jalan buntu), "backtrack" (hapus posisi saat ini dari jalur solusi dan tandai sebagai tidak dikunjungi) dan coba arah lain dari posisi sebelumnya.</li>
        <li>Jika mencapai titik akhir, solusi ditemukan.</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function solveMaze(maze, x, y, sol):
  if (x == N-1 and y == N-1) then // Jika mencapai tujuan
    sol[x][y] = 1
    return true

  if (isSafe(maze, x, y)) then // Cek apakah posisi saat ini aman
    sol[x][y] = 1 // Tandai sebagai bagian dari jalur solusi

    // Coba bergerak ke kanan
    if (solveMaze(maze, x, y+1, sol)) return true
    // Coba bergerak ke bawah
    if (solveMaze(maze, x+1, y, sol)) return true

    sol[x][y] = 0 // Jika tidak ada arah yang berhasil, backtrack
    return false
  return false

function isSafe(maze, x, y):
  // Cek jika (x, y) valid dan merupakan jalur (bukan dinding)
  return (x >= 0 and x < N and y >= 0 and y < N and maze[x][y] == 1)
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Menemukan Solusi:</strong> Dijamin menemukan setidaknya satu solusi jika ada.</li>
            <li><strong>Sederhana:</strong> Konsep backtracking relatif sederhana untuk diimplementasikan secara rekursif.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Tidak Optimal:</strong> Tidak menjamin jalur terpendek.</li>
            <li><strong>Bisa Lambat:</strong> Untuk labirin yang sangat besar atau kompleks karena menjelajahi banyak jalur.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Masalah Rat in Maze adalah pengantar yang sangat baik untuk algoritma backtracking, menunjukkan bagaimana kita dapat menjelajahi semua kemungkinan jalur dan kembali jika menemui jalan buntu.</p>
    `,
    author: "by Admin on June 15, 2025"

  },
  'subset-sum-problem': {
    title: "Subset Sum Problem",
    description: "Memecahkan masalah Subset Sum menggunakan pemrograman dinamis atau backtracking.",
    fullContent: `
      <h2>Apa Itu Subset Sum Problem?</h2>
      <p>Diberikan satu set angka dan angka target K, Subset Sum Problem adalah masalah menentukan apakah ada subset dari set angka tersebut yang jumlahnya sama dengan K. Ini adalah masalah NP-Complete yang terkenal dalam ilmu komputer.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Optimasi Keuangan:</strong> Mencari kombinasi item yang cocok dengan anggaran tertentu.</li>
        <li><strong>Kriptografi:</strong> Beberapa masalah kriptografi dapat direduksi menjadi Subset Sum.</li>
        <li><strong>Penjadwalan:</strong> Untuk membagi tugas ke dalam kelompok.</li>
      </ul>

      <h2>Bagaimana Cara Memecahkannya?</h2>
      <p>Ada dua pendekatan utama untuk memecahkan masalah Subset Sum:</p>
      <h3>1. Pemrograman Dinamis:</h3>
      <p>Pendekatan ini membangun tabel solusi untuk sub-masalah yang lebih kecil. Tabel \`dp[i][j]\` bisa menunjukkan apakah jumlah \`j\` dapat dibentuk menggunakan \`i\` item pertama. Ini efektif untuk set angka yang ukurannya tidak terlalu besar.</p>
      <pre><code>
function subsetSumDP(set, targetSum):
  n = set.length
  dp = new Array(n + 1).fill(false).map(() => new Array(targetSum + 1).fill(false));

  // Jika jumlahnya 0, itu selalu mungkin dengan mengambil subset kosong
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  // Isi tabel dp
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= targetSum; j++) {
      dp[i][j] = dp[i-1][j]; // Tidak termasuk item saat ini
      if (j >= set[i-1]) {
        dp[i][j] = dp[i][j] || dp[i-1][j - set[i-1]]; // Termasuk item saat ini
      }
    }
  }
  return dp[n][targetSum];
      </code></pre>
      <h3>2. Backtracking:</h3>
      <p>Secara rekursif menjelajahi semua kemungkinan subset, menambah atau tidak menambah setiap elemen ke subset saat ini, dan mundur jika jumlah melebihi target atau tidak ada jalan lagi.</p>
      <pre><code>
function subsetSumBacktracking(set, targetSum, currentSum, index, path):
  if currentSum == targetSum:
    print "Found subset:", path
    return true // Atau kumpulkan semua solusi

  if index == set.length:
    return false // Semua elemen sudah diproses

  // Termasuk elemen saat ini
  if subsetSumBacktracking(set, targetSum, currentSum + set[index], index + 1, path.concat(set[index])):
    return true

  // Tidak termasuk elemen saat ini
  if subsetSumBacktracking(set, targetSum, currentSum, index + 1, path):
    return true

  return false
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Solusi Optimal:</strong> Jika menggunakan Pemrograman Dinamis.</li>
            <li><strong>Fleksibilitas:</strong> Dapat diadaptasi untuk varian masalah.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Kompleksitas Tinggi:</strong> Terutama untuk Pemrograman Dinamis dengan set angka besar ($\mathcal{O}(N \times Sum)$).</li>
            <li><strong>Eksplorasi Luas:</strong> Backtracking dapat mengeksplorasi banyak cabang.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Subset Sum Problem adalah masalah fundamental yang menunjukkan kekuatan pemrograman dinamis dan backtracking dalam menyelesaikan masalah kombinatorial yang kompleks.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'n-queens-problem': {
    title: "N-Queens Problem",
    description: "Bagaimana menempatkan N ratu di papan catur NxN tanpa saling menyerang.",
    fullContent: `
      <h2>Apa Itu N-Queens Problem?</h2>
      <p>Masalah N-Queens adalah tentang menempatkan N ratu di papan catur N x N sedemikian rupa sehingga tidak ada dua ratu yang saling menyerang (yaitu, tidak ada dua ratu yang berada di baris, kolom, atau diagonal yang sama). Ini adalah contoh klasik dari masalah yang diselesaikan menggunakan algoritma backtracking.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Algoritma Backtracking:</strong> Contoh yang bagus untuk memahami dan menerapkan backtracking.</li>
        <li><strong>Pemecahan Teka-Teki:</strong> Dapat diadaptasi untuk teka-teki logika serupa.</li>
        <li><strong>Optimasi Penempatan:</strong> Konsepnya relevan dalam masalah penempatan sumber daya yang tidak boleh bertabrakan.</li>
      </ul>

      <h2>Bagaimana Cara Memecahkannya?</h2>
      <p>Pendekatan umumnya adalah menggunakan backtracking:</p>
      <ol>
        <li>Mulai dari kolom pertama.</li>
        <li>Tempatkan ratu di baris yang tersedia di kolom saat ini (baris dianggap aman jika tidak ada ratu lain di baris, kolom, atau diagonal yang sama).</li>
        <li>Jika penempatan aman, rekursif panggil fungsi untuk kolom berikutnya.</li>
        <li>Jika tidak ada baris yang aman di kolom saat ini, atau jika panggilan rekursif tidak menemukan solusi, "backtrack" (hapus ratu dari posisi saat ini) dan coba baris lain di kolom sebelumnya.</li>
        <li>Jika N ratu berhasil ditempatkan, sebuah solusi ditemukan.</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function solveNQueens(board, col):
  if col >= N: // Semua ratu sudah ditempatkan
    print board // Cetak solusi
    return true

  for row from 0 to N-1:
    if isSafe(board, row, col):
      board[row][col] = 1 // Tempatkan ratu
      if solveNQueens(board, col + 1): // Rekursif untuk kolom berikutnya
        return true
      board[row][col] = 0 // Backtrack: hapus ratu

  return false // Tidak ada baris yang aman di kolom ini

function isSafe(board, row, col):
  // Cek baris ini di sisi kiri
  for x from 0 to col-1:
    if board[row][x] == 1:
      return false
  // Cek diagonal atas kiri
  for x from row, y from col to 0:
    if board[x][y] == 1:
      return false
  // Cek diagonal bawah kiri
  for x from row, y from col to N-1:
    if board[x][y] == 1:
      return false
  return true
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Menemukan Semua Solusi:</strong> Dapat menemukan semua solusi yang mungkin.</li>
            <li><strong>Ilustrasi Backtracking:</strong> Contoh yang sangat jelas dari konsep backtracking.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Kompleksitas Eksponensial:</strong> Waktu komputasi tumbuh secara eksponensial seiring dengan meningkatnya N.</li>
            <li><strong>Tidak Optimal untuk N Besar:</strong> Menjadi sangat lambat untuk papan yang besar.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Masalah N-Queens adalah teka-teki yang menarik yang dengan sempurna menggambarkan bagaimana backtracking dapat digunakan untuk secara sistematis menjelajahi ruang solusi untuk menemukan semua konfigurasi yang valid.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'huffman-coding': {
    title: "Huffman Coding",
    description: "Teknik kompresi data tanpa kehilangan informasi yang efisien.",
    fullContent: `
      <h2>Apa Itu Huffman Coding?</h2>
      <p>Huffman Coding adalah algoritma pengkodean entropi khusus yang digunakan untuk kompresi data tanpa kehilangan informasi (lossless data compression). Ini adalah salah satu teknik kompresi data yang paling populer dan efektif. Algoritma ini dirancang oleh David A. Huffman pada tahun 1952.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Kompresi Data:</strong> Dalam format file seperti JPEG (untuk kompresi lossless), MP3 (untuk fase pengkodean bitrate), dan ZIP.</li>
        <li><strong>Transmisi Data:</strong> Untuk mengurangi bandwidth yang dibutuhkan dalam komunikasi.</li>
      </ul>

      <h2>Bagaimana Cara Kerjanya?</h2>
      <p>Huffman Coding bekerja dengan membangun pohon biner yang disebut Pohon Huffman. Ide dasarnya adalah memberikan kode biner yang lebih pendek untuk karakter yang sering muncul, dan kode yang lebih panjang untuk karakter yang jarang muncul.</p>
      <ol>
        <li><strong>Hitung Frekuensi:</strong> Hitung frekuensi kemunculan setiap karakter dalam data.</li>
        <li><strong>Bangun Pohon:</strong> Buat node untuk setiap karakter dan frekuensinya. Masukkan semua node ke dalam priority queue (antrian prioritas).</li>
        <li><strong>Gabungkan Node:</strong> Berulang kali ambil dua node dengan frekuensi terendah dari priority queue, gabungkan menjadi node induk baru (dengan frekuensi gabungan), dan masukkan node induk ini kembali ke priority queue.</li>
        <li><strong>Hasil:</strong> Ulangi hingga hanya tersisa satu node di priority queue, yaitu akar Pohon Huffman.</li>
        <li><strong>Buat Kode:</strong> Telusuri Pohon Huffman dari akar ke daun untuk menetapkan kode biner (misalnya, bergerak ke kiri = 0, bergerak ke kanan = 1).</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
// Struktur Node Pohon Huffman
class Node:
  character
  frequency
  left_child
  right_child

function buildHuffmanTree(frequencies):
  priorityQueue = new PriorityQueue()
  for each char, freq in frequencies:
    node = new Node(char, freq)
    priorityQueue.insert(node)

  while priorityQueue.size > 1:
    left = priorityQueue.extractMin()
    right = priorityQueue.extractMin()
    parentNode = new Node(null, left.frequency + right.frequency)
    parentNode.left_child = left
    parentNode.right_child = right
    priorityQueue.insert(parentNode)

  return priorityQueue.extractMin() // Akar Pohon Huffman

function generateHuffmanCodes(node, currentCode, codes):
  if node.character is not null:
    codes[node.character] = currentCode
    return

  generateHuffmanCodes(node.left_child, currentCode + "0", codes)
  generateHuffmanCodes(node.right_child, currentCode + "1", codes)
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Lossless:</strong> Tidak ada informasi yang hilang selama kompresi.</li>
            <li><strong>Optimal:</strong> Menghasilkan kode dengan panjang rata-rata terpendek untuk kumpulan simbol yang diberikan.</li>
            <li><strong>Sederhana:</strong> Konsepnya relatif mudah dipahami.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Membutuhkan Dua Pass:</strong> Pass pertama untuk menghitung frekuensi, pass kedua untuk mengkodekan.</li>
            <li><strong>Tidak Adaptif:</strong> Pohon Huffman dibangun berdasarkan frekuensi statis, tidak optimal jika frekuensi berubah selama kompresi.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Huffman Coding adalah algoritma kompresi data fundamental yang masih relevan hingga saat ini karena efisiensi dan sifatnya yang lossless, membuatnya cocok untuk berbagai aplikasi kompresi file.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'fractional-knapsack': {
    title: "Fractional Knapsack",
    description: "Masalah ransel fraksional menggunakan algoritma serakah.",
    fullContent: `
      <h2>Apa Itu Fractional Knapsack Problem?</h2>
      <p>Fractional Knapsack Problem adalah masalah optimasi di mana kita harus memilih item atau *bagian* dari item dengan nilai dan berat tertentu untuk dimasukkan ke dalam ransel berkapasitas terbatas, sehingga nilai total yang dibawa maksimal. Kata "fraksional" berarti kita bisa mengambil sebagian kecil dari item, tidak harus seluruhnya.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Optimasi Sumber Daya:</strong> Ketika sumber daya (item) dapat dibagi.</li>
        <li><strong>Manajemen Investasi:</strong> Memilih investasi yang memberikan keuntungan maksimal per unit modal.</li>
        <li><strong>Perencanaan Produksi:</strong> Menentukan berapa banyak dari setiap produk yang harus diproduksi untuk memaksimalkan keuntungan.</li>
      </ul>

      <h2>Bagaimana Cara Memecahkannya?</h2>
      <p>Masalah Fractional Knapsack adalah salah satu contoh di mana algoritma serakah (greedy algorithm) bekerja dengan sempurna untuk menemukan solusi optimal. Langkah-langkahnya adalah:</p>
      <ol>
        <li><strong>Hitung Rasio Nilai-per-Berat:</strong> Untuk setiap item, hitung rasio nilainya terhadap beratnya (nilai/berat). Ini menunjukkan seberapa "berharga" setiap unit berat item.</li>
        <li><strong>Urutkan Item:</strong> Urutkan item dalam urutan menurun berdasarkan rasio nilai-per-berat mereka.</li>
        <li><strong>Isi Ransel:</strong> Mulai dari item dengan rasio tertinggi, masukkan item sepenuhnya ke dalam ransel selama masih ada kapasitas.</li>
        <li><strong>Ambil Bagian:</strong> Jika ransel tidak bisa menampung seluruh item terbaik berikutnya, ambil hanya sebagian dari item tersebut untuk mengisi kapasitas ransel yang tersisa.</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function fractionalKnapsack(items, capacity):
  // items: array of {value, weight} objects
  // capacity: kapasitas ransel

  // 1. Hitung rasio value/weight
  for each item in items:
    item.ratio = item.value / item.weight

  // 2. Urutkan item berdasarkan rasio secara menurun
  sort items by item.ratio in descending order

  totalValue = 0
  currentWeight = 0

  // 3. Isi ransel
  for each item in sorted items:
    if currentWeight + item.weight <= capacity:
      // Ambil seluruh item
      currentWeight = currentWeight + item.weight
      totalValue = totalValue + item.value
    else:
      // Ambil sebagian item
      remainingCapacity = capacity - currentWeight
      fraction = remainingCapacity / item.weight
      totalValue = totalValue + (item.value * fraction)
      currentWeight = currentWeight + (item.weight * fraction)
      break // Ransel penuh

  return totalValue
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Optimal:</strong> Algoritma serakah dijamin memberikan solusi optimal.</li>
            <li><strong>Sederhana:</strong> Relatif mudah dipahami dan diimplementasikan.</li>
            <li><strong>Efisiensi:</strong> Waktu komputasi ditentukan oleh langkah pengurutan.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Hanya untuk Fraksional:</strong> Tidak dapat diterapkan langsung jika item tidak dapat dibagi (untuk itu, gunakan 0/1 Knapsack dengan DP).</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Fractional Knapsack adalah contoh yang bagus tentang bagaimana algoritma serakah dapat menyelesaikan masalah optimasi tertentu secara optimal, menyoroti pentingnya memilih algoritma yang tepat untuk masalah yang tepat.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
  'activity-selection-problem': {
    title: "Activity Selection Problem",
    description: "Memilih aktivitas yang kompatibel untuk memaksimalkan jumlah aktivitas yang dilakukan.",
    fullContent: `
      <h2>Apa Itu Activity Selection Problem?</h2>
      <p>Diberikan satu set aktivitas, masing-masing dengan waktu mulai dan waktu selesai, tujuan dari Activity Selection Problem adalah untuk memilih jumlah maksimum aktivitas yang kompatibel (tidak tumpang tindih). Ini adalah masalah optimasi yang sering diselesaikan dengan algoritma serakah.</p>
      <h3>Kapan Digunakan?</h3>
      <ul>
        <li><strong>Penjadwalan Ruang Rapat:</strong> Memaksimalkan penggunaan ruang dengan banyak permintaan.</li>
        <li><strong>Manajemen Sumber Daya:</strong> Menentukan aktivitas mana yang bisa dilakukan oleh satu sumber daya pada satu waktu.</li>
        <li><strong>Penjadwalan CPU:</strong> Mengelola proses untuk memaksimalkan throughput.</li>
      </ul>

      <h2>Bagaimana Cara Memecahkannya?</h2>
      <p>Pendekatan serakah bekerja dengan sangat baik untuk masalah ini. Langkah-langkahnya adalah:</p>
      <ol>
        <li><strong>Urutkan Aktivitas:</strong> Urutkan semua aktivitas berdasarkan waktu selesai mereka dalam urutan menaik.</li>
        <li><strong>Pilih Aktivitas Pertama:</strong> Pilih aktivitas pertama yang selesai dari daftar yang sudah diurutkan. Tambahkan aktivitas ini ke daftar solusi.</li>
        <li><strong>Iterasi:</strong> Untuk aktivitas yang tersisa, pilih aktivitas berikutnya yang memiliki waktu mulai lebih besar atau sama dengan waktu selesai dari aktivitas terakhir yang telah dipilih.</li>
        <li><strong>Ulangi:</strong> Ulangi langkah 3 sampai tidak ada lagi aktivitas yang bisa dipilih.</li>
      </ol>

      <h2>Contoh Implementasi (Pseudocode)</h2>
      <pre><code>
function activitySelection(activities):
  // activities: array of {start, finish} objects

  // 1. Urutkan aktivitas berdasarkan waktu selesai
  sort activities by finish_time in ascending order

  selectedActivities = []
  selectedActivities.add(activities[0]) // Pilih aktivitas pertama yang selesai

  lastFinishTime = activities[0].finish

  // 2. Iterasi dan pilih aktivitas berikutnya yang kompatibel
  for i from 1 to activities.length - 1:
    if activities[i].start >= lastFinishTime:
      selectedActivities.add(activities[i])
      lastFinishTime = activities[i].finish

  return selectedActivities
      </code></pre>

      <h2>Kelebihan & Kekurangan</h2>
      <div class="pros-cons-grid">
        <div class="pros">
          <h3>Kelebihan</h3>
          <ul>
            <li><strong>Optimal:</strong> Algoritma serakah dijamin memberikan solusi optimal (jumlah maksimum aktivitas).</li>
            <li><strong>Efisiensi:</strong> Waktu komputasi terutama bergantung pada waktu pengurutan.</li>
            <li><strong>Sederhana:</strong> Mudah diimplementasikan.</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Kekurangan</h3>
          <ul>
            <li><strong>Hanya Optimal untuk Jumlah:</strong> Tidak menjamin durasi total terpanjang atau kriteria lainnya.</li>
          </ul>
        </div>
      </div>

      <h2>Kesimpulan</h2>
      <p>Activity Selection Problem adalah contoh klasik yang menunjukkan kekuatan dan keanggunan algoritma serakah dalam menyelesaikan masalah optimasi tertentu, menawarkan solusi optimal dengan cara yang sederhana dan efisien.</p>
    `,
    author: "by Admin on June 15, 2025"
  },
};

// Menggunakan computed property untuk mencari artikel berdasarkan slug
const article = computed(() => {
  // Mengonversi slug ke format yang sesuai dengan kunci objek articlesData
  // Menghilangkan spasi dan mengonversi ke huruf kecil
  const formattedSlug = slug.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return articlesData[formattedSlug] || {
    title: "Artikel Tidak Ditemukan",
    description: "Maaf, artikel yang Anda cari tidak ada.",
    fullContent: "<p>Silakan kembali ke daftar artikel atau periksa URL Anda.</p>"
  };
});

// Anda juga bisa mengatur meta tag halaman secara dinamis di sini
useHead({
  title: article.value.title + ' - Portfolio',
  meta: [
    { name: 'description', content: article.value.description }
  ]
});
</script>

<style scoped>
.article-detail-page {
  padding: 60px 40px;
  background-color: #0d0d1a; /* Latar belakang gelap */
  color: #f0f0f0;
  min-height: 90vh; /* Agar konten tidak terlalu pendek */
  max-width: 900px; /* Batasi lebar konten agar mudah dibaca */
  margin: 0 auto; /* Pusatkan di tengah */
}

.back-link-container {
  margin-bottom: 40px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #00bcd4; /* Warna aksen */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #0097a7;
}

.article-header {
  text-align: center;
  margin-bottom: 50px;
}

.article-header h1 {
  font-size: 3em;
  color: #fff;
  margin-bottom: 15px;
}

.article-description {
  font-size: 1.2em;
  color: #ccc;
  line-height: 1.5;
}

.article-content {
  background-color: #1a1a2e; /* Latar belakang konten artikel */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

/* Styling untuk konten HTML yang dimasukkan via v-html */
.rich-text-content h2 {
  font-size: 2em;
  color: #00bcd4;
  margin-top: 30px;
  margin-bottom: 15px;
}

.rich-text-content p {
  font-size: 1.1em;
  line-height: 1.7;
  margin-bottom: 15px;
}

.rich-text-content ul {
  list-style: disc;
  margin-left: 20px;
  padding-left: 0;
  margin-bottom: 15px;
}

.rich-text-content ul li {
  margin-bottom: 8px;
}

.rich-text-content strong {
  color: #00bcd4;
}

.rich-text-content pre {
  background-color: #0d0d1a;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto; /* Memungkinkan scroll horizontal untuk kode */
  margin-bottom: 20px;
}

.rich-text-content code {
  font-family: 'Fira Code', 'Cascadia Code', monospace; /* Font monospace untuk kode */
  font-size: 0.95em;
  color: #00bcd4; /* Warna kode */
}

.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.pros, .cons {
  background-color: #2b2b41;
  padding: 20px;
  border-radius: 8px;
}

.pros h3 {
  color: #4CAF50; /* Warna hijau untuk Kelebihan */
  text-align: center;
  margin-bottom: 15px;
}

.cons h3 {
  color: #F44336; /* Warna merah untuk Kekurangan */
  text-align: center;
  margin-bottom: 15px;
}

.pros ul, .cons ul {
  list-style: none; /* Hapus bullet default */
  padding: 0;
  margin: 0;
}

.pros ul li, .cons ul li {
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.pros ul li::before {
  content: '✓'; /* Icon centang */
  color: #4CAF50;
  font-weight: bold;
  margin-right: 5px;
}

.cons ul li::before {
  content: '✗'; /* Icon silang */
  color: #F44336;
  font-weight: bold;
  margin-right: 5px;
}


@media (max-width: 768px) {
  .article-detail-page {
    padding: 30px 20px;
  }
  .article-header h1 {
    font-size: 2em;
  }
  .article-description {
    font-size: 1em;
  }
  .article-content {
    padding: 20px;
  }
  .rich-text-content h2 {
    font-size: 1.5em;
  }
  .rich-text-content p {
    font-size: 1em;
  }
  .pros-cons-grid {
    grid-template-columns: 1fr; /* Stack di mobile */
  }
}
</style>
