<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} Aditya Bahri. All Rights Reserved.</p>
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.app-footer {
  background-color: #0d0d1a;
  color: #ccc;
  padding: 30px 40px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.app-footer p {
  margin-bottom: 15px;
}

.footer-links a {
  color: #ccc;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #00bcd4;
}

@media (max-width: 768px) {
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>