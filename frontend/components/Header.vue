<template>
  <div class="header" :class="{ small: blok.small_header }" v-editable="blok">
    <div class="container py-5">
      <div class="holder-header-content" v-if="!blok.small_header">
        <h1>{{ blok.title }}</h1>
        <div class="subline pb-3">{{ blok.subtitle }}</div>
        <div class="description pb-4">{{ blok.introduction }}</div>
        <!-- <Nuxtlink :to="blok.link" class="anchor">See my latest work</Nuxtlink> -->
      </div>
      <div class="picture-me"></div>
    </div>
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
.header {
  background-color: #222;
  overflow: hidden;

  .container {
    position: relative;
    @include tablet-up {
      height: 660px;
    }
    .holder-header-content {
      padding: 64px 0px 24px;
      position: relative;
      z-index: 5;
      @include tablet-up {
        max-width: 560px;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(0, -50%);
        left: 0;
        z-index: 5;
      }
      .subline {
        color: white;
        font-weight: 600;
        font-size: 24px;
        @include tablet-up {
          font-size: 32px;
        }
      }
      .description {
        color: white;
        opacity: 0.6;
        font-size: 16px;
      }
      .anchor {
        display: inline-block;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
        letter-spacing: 1px;
        padding-bottom: 4px;
        border-bottom: solid 1px white;
        opacity: 0.8;
        @include tablet-up {
          cursor: pointer;
          transition: opacity 0.4s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .picture-me {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 90%;
      background-image: url(@/assets/img/portrait.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom 0px;
      z-index: 3;
      opacity: 0.4;
      width: 230px;
      @include tablet-up {
        width: 440px;
        opacity: 0.8;
      }
      &.small {
      }
    }
  }
  &.small {
    .container {
      height: 160px;
      .picture-me {
        width: 220px;
        background-size: 50% auto;
        background-position: right 16px top 0px;
        @include tablet-up {
          width: 440px;
        }
      }
      @include tablet-up {
        height: 240px;
      }
    }
  }
}
</style>