// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true }, // Aktifkan Nuxt DevTools di browser
  css: [
    '~/assets/css/main.css' // Impor file CSS global Anda
  ],
  app: {
    head: {
      title: 'Aditya Bahri - UI/UX Designer Portfolio', // Judul default halaman
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio website of Aditya Bahri, an amateur UI/UX Designer.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        // Menggunakan Google Fonts (Poppins)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        // Anda bisa menambahkan favicon di sini jika ada
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})