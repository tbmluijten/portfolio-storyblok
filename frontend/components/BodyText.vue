<template>
  <p>{{ blok.Edit }}</p>
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