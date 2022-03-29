<template>
  <div>
  <button class="carousel-control left" @click="$emit('prev')"><</button>
  <button class="carousel-control right" @click="$emit('next')">></button>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"], // vue v3
};
</script>
<style scoped>
.carousel-control {
  background-color: transparent;
  border:none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(40%);
  color: black;
  cursor: pointer;
  font-size: 20px;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
