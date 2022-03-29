<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    >
    <img :src="slider[index]" width="50" alt="">
    </button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex", "slider" ],
};
</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}
.carousel-indicator-item {
  width: 50px;
  height: 50px;
  border: none;
/*  background: url('');
  background-size: cover;
  background-position:center ;*/
  opacity: 0.8;
  margin: 0.2em;
  padding: 0;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>
