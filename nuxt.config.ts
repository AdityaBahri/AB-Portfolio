    // nuxt.config.ts
    export default defineNuxtConfig({
      devtools: { enabled: true },
      css: [
        '~/assets/css/main.css'
      ],
      modules: [
        // Pastikan 'nuxt-icon' TIDAK ADA di sini lagi
        // array ini mungkin kosong atau berisi modul lain yang Anda tambahkan
      ],
      app: {
        head: {
          title: 'Aditya Bahri - Portfolio',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Portfolio website of Stefan William, a professional UI/UX Designer.' },
            { name: 'format-detection', content: 'telephone=no' }
          ],
          link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
          ]
        }
      }
    })
    