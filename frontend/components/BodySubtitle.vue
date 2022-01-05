<template>
  <h3>{{ blok.subtitle }}</h3>
</template>

<script>
export default {
  props: {
    size: String,
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>