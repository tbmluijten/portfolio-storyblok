<template>
  <div class="container" v-editable="blok">
    <!-- <pre>{{ blok }}</pre> -->
    <component v-for="blok in blok.body" :key="blok._uid" :blok="blok" :is="blok.component" />
  </div>
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
.container {
  max-width: 800px;
  margin-top: 48px;
  &:first-child {
    padding: 24px 0px;
  }

  @include tablet-up {
    // padding: 48px 0px;
    // // padding-bottom: 24px;
  }
}
</style>