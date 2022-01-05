<template>
  <div class="image-content">
    <div class="row">
      <div class="image-holder" v-for="item in ImageData" :key="item._uid" :class="item.type">
        <img :src="item.image.filename" :alt="item.image.alt" class="image-file" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    ImageData: Array,
  },
};
</script>

<style lang="scss" scoped>
.image-content {
  .row {
    .image-holder {
      margin-bottom: 16px;
      @include tablet-up {
        margin-bottom: 24px;
      }
      .image-file {
        width: 100%;
      }
    }
  }
}
</style>