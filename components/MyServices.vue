<template>
  <section class="services-section">
    <h2 class="section-title">My Awesome Service</h2>
    <div class="service-list">
      <div class="service-item">
        <h3>Website Design</h3>
        <p>80+ Project</p>
        <span class="arrow">&rarr;</span>
      </div>
      <div class="service-item">
        <h3>Mobile App Design</h3>
        <p>70+ Project</p>
        <span class="arrow">&rarr;</span>
      </div>
      <div class="service-item">
        <h3>UI/UX Consulting</h3>
        <p>50+ Project</p>
        <span class="arrow">&rarr;</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 80px 40px;
  background-color: #1a1a2e;
  color: white;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Kolom responsif */
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-item {
  background-color: #2b2b41; /* Warna latar belakang item */
  padding: 30px;
  border-radius: 10px;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.service-item h3 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #fff;
}

.service-item p {
  color: #ccc;
  font-size: 1em;
}

.service-item .arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 2em;
  color: #00bcd4;
  transition: transform 0.3s ease;
}

.service-item:hover .arrow {
  transform: translateX(10px); /* Efek panah bergeser saat hover */
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px 20px;
  }
}
</style>