<template>
  <h2 class="title" v-editable="blok">{{ blok.title }}</h2>
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