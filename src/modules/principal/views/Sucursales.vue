<template>
  <div class="mapa">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56385162.7100326!2d-125.04913309624531!3d30.39419957231558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f92ccc74869%3A0xa5f8ba33ddaa49a0!2sAquagym%20-%20Clube%20Naval%20do%20Funchal!5e0!3m2!1sen!2sus!4v1728191583345!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style="border:0;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style scoped>
.mapa {
  width: 100%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .mapa {
    height: 50vh; 
  }
}

@media (max-width: 480px) {
  .mapa {
    height: 40vh; 
  }
}
</style>
