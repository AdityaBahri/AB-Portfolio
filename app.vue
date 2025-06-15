<template>
  <div>
    <!--
      NuxtLayout adalah komponen bawaan Nuxt 3 yang digunakan untuk merender tata letak (layout) aplikasi Anda.
      Secara default, jika Anda memiliki file 'layouts/default.vue', Nuxt akan menggunakannya.
      Jika Anda ingin menggunakan layout kustom (misalnya, 'layouts/custom.vue'), Anda bisa menulis:
      <NuxtLayout name="custom">
        <NuxtPage />
      </NuxtLayout>
      Untuk proyek portofolio ini, kita akan menggunakan NuxtLayout.
    -->
    <NuxtLayout>
      <!--
        NuxtPage adalah komponen bawaan Nuxt 3 yang bertanggung jawab untuk merender
        konten halaman yang sedang aktif berdasarkan sistem routing file-system dari folder 'pages'.
        Misalnya, jika Anda mengakses '/about', NuxtPage akan merender 'pages/about.vue'.
      -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Bagian <script setup> ini adalah tempat Anda bisa menambahkan logika JavaScript global
// atau pengaturan yang berlaku untuk seluruh aplikasi Anda di luar komponen halaman.
// Namun, untuk sebagian besar proyek Nuxt 3, app.vue biasanya sangat minimalis
// karena tugas utamanya adalah menjadi wadah untuk layout dan halaman.

// Contoh: Anda bisa mendeklarasikan state global menggunakan useState
// const appName = ref('My Awesome Portfolio');
// provide('appName', appName); // Menyediakan data ini ke seluruh komponen di bawahnya
</script>

<style>
/*
  Gaya CSS global yang diterapkan ke seluruh aplikasi.
  Penting untuk memastikan elemen root HTML/Body mengambil tinggi penuh viewport
  untuk tata letak yang konsisten, terutama jika menggunakan Flexbox/Grid di seluruh halaman.
*/
html, body, #__nuxt, #__layout {
  height: 100%; /* Pastikan elemen-elemen ini mengisi tinggi penuh yang tersedia */
  margin: 0;    /* Hapus margin default browser */
  padding: 0;   /* Hapus padding default browser */
  overflow-x: hidden; /* Mencegah scroll horizontal yang tidak diinginkan */
}

/*
  Catatan:
  Meskipun Anda dapat menempatkan gaya global di sini,
  sangat disarankan untuk mengorganisir gaya global yang lebih besar
  ke dalam file terpisah seperti 'assets/css/main.css'
  dan mengimpornya di 'nuxt.config.ts' (seperti yang telah kita bahas sebelumnya).
  Ini membuat proyek lebih terorganisasi dan mudah dikelola.
*/
</style>