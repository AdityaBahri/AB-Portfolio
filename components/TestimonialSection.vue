<template>
  <section class="testimonial-section">
    <div class="testimonial-content">
      <img src="/client-avatar.jpg" alt="Client Avatar" class="client-avatar" />
      <p class="quote">
        "Adit is a profesional worker who always gives results that are beyond our expectations, thanks for your services"
      </p>
      <p class="client-name">Kezia</p>
    </div>
    <div class="testimonial-nav">
      <button class="nav-arrow">&leftarrow;</button>
      <button class="nav-arrow">&rightarrow;</button>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 80px 40px;
  background-color: #2b2b41; /* Warna latar belakang berbeda */
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.testimonial-content {
  max-width: 700px;
  margin-bottom: 40px;
}

.client-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #00bcd4; /* Border warna aksen */
}

.quote {
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}

.client-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #00bcd4;
}

.testimonial-nav {
  display: flex;
  gap: 20px;
}

.nav-arrow {
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-arrow:hover {
  background-color: #0097a7;
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 20px;
  }
  .quote {
    font-size: 1.2em;
  }
}
</style>